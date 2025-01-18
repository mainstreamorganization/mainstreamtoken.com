#!/bin/bash

# Directory containing markdown files
INPUT_DIR="docs/whitepaper"
OUTPUT_MD="whitepaper.md"

# Clear or create output file
> "$OUTPUT_MD"

# Add title and author information with adjusted spacing
cat << EOF > "$OUTPUT_MD"
---
title: "Mainstream Token Whitepaper"
author: "Mainstream Token Team"
date: "$(date +%B\ %Y)"
documentclass: report
geometry: 
  - margin=1in
linkcolor: blue
toc: true
numbersections: true
header-includes:
  - \usepackage{titling}
  - \usepackage{titlesec}
  - \usepackage{tocloft}
  - \pretitle{\begin{center}\LARGE\vspace*{-3em}}
  - \posttitle{\end{center}\vspace{1em}}
  - \preauthor{\begin{center}\large}
  - \postauthor{\end{center}\vspace{1em}}
  - \titleformat{\chapter}{\normalfont\LARGE\bfseries}{\thechapter.}{1em}{}
  - \titlespacing*{\chapter}{0pt}{-20pt}{20pt}
  - \setlength{\droptitle}{-2em}
  - \setlength{\headheight}{12pt}
  - \setlength{\headsep}{12pt}
  - \renewcommand{\contentsname}{Table of Contents}
---

EOF

# Rest of the script remains the same
FILES=(
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

# Function to remove frontmatter, import statements, and manual TOC
remove_frontmatter_and_toc() {
    local file="$1"
    local BEGIN_FRONT_MATTER=false
    local SKIP_TOC=false
    
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
        
        # Skip if in frontmatter or if line starts with import
        if [ "$BEGIN_FRONT_MATTER" = true ] || [[ $line =~ ^import ]]; then
            continue
        fi
        
        # Skip manual table of contents section
        if [[ $line =~ ^#.*Table\ of\ Contents.* ]] || [[ $line =~ ^Download\ Whitepaper\ PDF ]]; then
            SKIP_TOC=true
            continue
        fi
        
        # Resume normal processing after TOC section
        if [ "$SKIP_TOC" = true ] && [[ $line =~ ^# ]]; then
            SKIP_TOC=false
        fi
        
        # Skip if we're in TOC section or if line is a bullet point in TOC
        if [ "$SKIP_TOC" = true ] || [[ $line =~ ^[•\*]\ [A-Za-z] ]]; then
            continue
        fi
        
        # Skip "Chapter X" lines
        if [[ $line =~ ^Chapter\ [0-9]+ ]]; then
            continue
        fi

        # Output the line if it hasn't been skipped
        echo "$line"
    done < "$file"
}

# Process each file
for file in "${FILES[@]}"; do
    if [ -f "$INPUT_DIR/$file" ]; then
        echo "Processing $file..."
        echo "" >> "$OUTPUT_MD"
        remove_frontmatter_and_toc "$INPUT_DIR/$file" >> "$OUTPUT_MD"
        echo "" >> "$OUTPUT_MD"
        echo "\\pagebreak" >> "$OUTPUT_MD"
        echo "" >> "$OUTPUT_MD"
    else
        echo "Warning: $file not found in $INPUT_DIR"
    fi
done

echo "Created $OUTPUT_MD"
echo "Converting to PDF..."

# Convert to PDF using pandoc with specific settings
pandoc "$OUTPUT_MD" \
    --from markdown \
    --to pdf \
    --pdf-engine=xelatex \
    --toc \
    --number-sections \
    --highlight-style=tango \
    --variable urlcolor=blue \
    --variable toccolor=black \
    -o whitepaper.pdf

if [ $? -eq 0 ]; then
    echo "Successfully created whitepaper.pdf"
    mv whitepaper.pdf static/docs/
else
    echo "Error during PDF conversion"
fi
