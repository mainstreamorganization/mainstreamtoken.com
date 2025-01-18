#!/bin/bash

# Directory containing markdown files
INPUT_DIR="docs/whitepaper"
OUTPUT_MD="whitepaper.md"

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

# Clear or create output file
> "$OUTPUT_MD"

# Add title to the combined file
echo "# Mainstream Token Whitepaper" > "$OUTPUT_MD"
echo "" >> "$OUTPUT_MD"
echo "" >> "$OUTPUT_MD"

# Process each file
for file in "${FILES[@]}"; do
    if [ -f "$INPUT_DIR/$file" ]; then
        echo "Adding $file..."
        
        # Add content, skipping frontmatter and import statements
        BEGIN_FRONT_MATTER=false
        while IFS= read -r line; do
            # Handle frontmatter
            if [[ $line == "---" ]]; then
                if [ "$BEGIN_FRONT_MATTER" = false ]; then
                    BEGIN_FRONT_MATTER=true
                    continue
                else
                    BEGIN_FRONT_MATTER=false
                    continue
                fi
            fi
            
            # Skip lines in frontmatter and import statements
            if [ "$BEGIN_FRONT_MATTER" = false ] && [[ ! $line =~ ^import ]]; then
                echo "$line" >> "$OUTPUT_MD"
            fi
        done < "$INPUT_DIR/$file"
        
        # Add two blank lines and a page break after each file
        echo "" >> "$OUTPUT_MD"
        echo "" >> "$OUTPUT_MD"
        echo "\\pagebreak" >> "$OUTPUT_MD"
        echo "" >> "$OUTPUT_MD"
    else
        echo "Warning: $file not found in $INPUT_DIR"
    fi
done

echo "Created $OUTPUT_MD"

# Print file size and first few lines
echo "File size: $(wc -l < "$OUTPUT_MD") lines"
echo "Preview of first few lines:"
head -n 5 "$OUTPUT_MD"
