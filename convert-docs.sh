#!/bin/bash

# Directory containing markdown files
INPUT_DIR="docs/whitepaper"
OUTPUT_MD="whitepaper.md"

# Clear output file if it exists
> "$OUTPUT_MD"

# Add title
echo "# Mainstream Token Whitepaper" > "$OUTPUT_MD"
echo "" >> "$OUTPUT_MD"

# List of files in order
FILES=(
    "table_of_contents.md"
    "executive_summary.md"
    "introduction.md"
    "ecosystem_overview.md"
    "mainstreamtoken_details.md"
    "technical_appendix.md"
    "roadmap.md"
    "community_engagement.md"
    "team.md"
    "aidamis.md"
    "conclusion.md"
    "legal_disclaimer.md"
    "appendices.md"
)

# Function to remove frontmatter
remove_frontmatter() {
    local file="$1"
    sed '/^---$/,/^---$/d' "$file" | sed '/^import /d'
}

# Combine files
for file in "${FILES[@]}"; do
    if [ -f "$INPUT_DIR/$file" ]; then
        echo "Processing $file..."
        echo "" >> "$OUTPUT_MD"
        remove_frontmatter "$INPUT_DIR/$file" >> "$OUTPUT_MD"
        echo "" >> "$OUTPUT_MD"
        echo "\\pagebreak" >> "$OUTPUT_MD"
        echo "" >> "$OUTPUT_MD"
    else
        echo "Warning: $file not found"
    fi
done

echo "Created $OUTPUT_MD"
echo "Converting to PDF..."

# Convert to PDF using pandoc
pandoc "$OUTPUT_MD" \
    --from markdown \
    --to pdf \
    --pdf-engine=xelatex \
    --toc \
    --number-sections \
    -V geometry:margin=1in \
    -V documentclass=report \
    -o whitepaper.pdf

if [ $? -eq 0 ]; then
    echo "Successfully created whitepaper.pdf"
else
    echo "Error during PDF conversion"
fi

mv whitepaper.pdf static/docs/
