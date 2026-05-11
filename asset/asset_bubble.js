// Complete asset data - UPDATED FROM CSV
const fullAssetData = {
    name: "Asset Mapping",
    children: [
        {
            name: "SOCIAL ASSETS",
            children: [
                {
                    name: "Care, health & support",
                    children: [
                        {name: "Grijo Spirit", value: 1, highlighted: false},
                        {name: "Crisis intervention infrastructure", value: 1, highlighted: false},
                        {name: "Health and care coordination", value: 1, highlighted: false},
                        {name: "Healthcare and emotional care knowledge", value: 1, highlighted: false},
                        {name: "Direct outreach to vulnerable populations", value: 1, highlighted: false}
                    ]
                },
                {
                    name: "Social capital & trust",
                    children: [
                        {name: "Established trust with social workers", value: 1, highlighted: true},
                        {name: "Hyper-local knowledge networks", value: 1, highlighted: true},
                        {name: "Informal information circulation", value: 1, highlighted: true},
                        {name: "High bonding capital among elderly", value: 1, highlighted: true},
                        {name: "High social bonding among Roma", value: 1, highlighted: true},
                        {name: "Strong social structure among Roma", value: 1, highlighted: true}
                    ]
                },
                {
                    name: "Skills & knowledge",
                    children: [
                        {name: "Factory/service workers skills", value: 1, highlighted: true},
                        {name: "Digital literacy", value: 1, highlighted: true},
                        {name: "Roma cultural skills & hospitality", value: 1, highlighted: true},
                        {name: "Parents childcare skills", value: 1, highlighted: true},
                        {name: "Scouts youth leadership", value: 1, highlighted: true}
                    ]
                },
                {
                    name: "Community and parish spaces",
                    children: [
                        {name: "Church community spiritual anchoring", value: 1, highlighted: false},
                        {name: "Community centres", value: 1, highlighted: false},
                        {name: "Churchyards", value: 1, highlighted: false},
                        {name: "Schoolyards", value: 1, highlighted: false}
                    ]
                }
            ]
        },
        {
            name: "SPATIAL ASSETS",
            children: [
                {
                    name: "Everyday and economic spaces",
                    children: [
                        {name: "Shops as local economic anchors", value: 1, highlighted: false},
                        {name: "Cafés, bars, terraces spaces", value: 1, highlighted: false},
                        {name: "Factories as employment places", value: 1, highlighted: false}
                    ]
                },
                {
                    name: "Everyday social spaces",
                    children: [
                        {name: "Schools", value: 2, highlighted: false},
                        {name: "Sport clubs", value: 1, highlighted: false},
                        {name: "Evangelic Church", value: 1, highlighted: false},
                        {name: "Catholic Churches", value: 1, highlighted: false}
                    ]
                },
                {
                    name: "Land & housing-related spatial assets",
                    children: [
                        {name: "Relationships with developers", value: 1, highlighted: false},
                        {name: "Land and housing asset management", value: 1, highlighted: false},
                        {name: "Capacity to grant land for public use", value: 1, highlighted: false}
                    ]
                }
            ]
        },
        {
            name: "ECONOMIC ASSETS",
            children: [
                {
                    name: "Local Employment",
                    children: [
                        {name: "Service-sector employment", value: 1, highlighted: false},
                        {name: "Cafés, bars, terraces", value: 1, highlighted: false},
                        {name: "Local shops and services", value: 1, highlighted: false}
                    ]
                },
                {
                    name: "Small & Local Businesses",
                    children: [
                        {name: "Stable neighbourhood anchors", value: 1, highlighted: true}
                    ]
                },
                {
                    name: "Skills & Productive Capacities",
                    children: [
                        {name: "Physical capacities", value: 1, highlighted: true},
                        {name: "Digital literacy skills", value: 1, highlighted: true},
                        {name: "Factory and service workers", value: 1, highlighted: true},
                        {name: "Roma community", value: 1, highlighted: true},
                        {name: "Teaching", value: 1, highlighted: true},
                        {name: "Technical, manual, operational skills", value: 1, highlighted: true},
                        {name: "Repair, reuse, recycling practices", value: 1, highlighted: true},
                        {name: "Elderly retirees: gardening, cooking", value: 1, highlighted: true}
                    ]
                },
                {
                    name: "Informal & Mutual Economy",
                    children: [
                        {name: "Caregiving", value: 1, highlighted: true},
                        {name: "Neighbour-to-neighbour support", value: 1, highlighted: true},
                        {name: "Shared equipment and skills", value: 1, highlighted: true},
                        {name: "Time and skill sharing", value: 1, highlighted: true}
                    ]
                },
                {
                    name: "Land, Housing & Development",
                    children: [
                        {name: "Capacity to host repair activities", value: 1, highlighted: false},
                        {name: "Land and housing management", value: 1, highlighted: false}
                    ]
                }
            ]
        },
        {
            name: "INSTITUTIONAL ASSETS",
            children: [
                {
                    name: "Funding & financial instruments",
                    children: [
                        {name: "National housing funds", value: 1, highlighted: false},
                        {name: "Capacity to support", value: 1, highlighted: false},
                        {name: "European funding streams", value: 1, highlighted: false},
                        {name: "IHRU (National Housing Funds)", value: 1, highlighted: false},
                        {name: "ESF (skills, employment, inclusion)", value: 1, highlighted: false},
                        {name: "ERDF (infrastructure, local development)", value: 1, highlighted: false},
                        {name: "PRR (recovery, housing, energy transition)", value: 1, highlighted: false},
                        {name: "Local employment", value: 1, highlighted: false},
                        {name: "Training", value: 1, highlighted: false},
                        {name: "Housing renovation", value: 1, highlighted: false},
                        {name: "Energy retrofits", value: 1, highlighted: false}
                    ]
                },
                {
                    name: "Policy, governance & authority",
                    children: [
                        {name: "Legislative and budgetary authority", value: 1, highlighted: false},
                        {name: "Capacity to enact policy reforms", value: 1, highlighted: false},
                        {name: "Multi-year funding allocation", value: 1, highlighted: false},
                        {name: "Participatory governance will", value: 1, highlighted: false},
                        {name: "Crisis response coordination", value: 1, highlighted: false},
                        {name: "Social cohesion frameworks", value: 1, highlighted: false}
                    ]
                }
            ]
        }
    ]
};

// Responsive chart dimensions
function getChartDimensions() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Adjust dimensions based on viewport size
    if (viewportWidth < 480) {
        return { width: 360, height: 400 };
    } else if (viewportWidth < 768) {
        return { width: Math.min(600, viewportWidth - 40), height: 650 };
    } else if (viewportWidth < 1024) {
        return { width: Math.min(900, viewportWidth - 80), height: 900 };
    } else {
        return { width: 1800, height: 1600 };
    }
}

// Initialize chart
let svg, root, pack;
const margin = 1;

// Helper functions to extract information from nodes
const getCategory = d => {
    if (d.depth === 1) return d.data.name;
    if (d.depth === 2) return d.parent.data.name;
    if (d.depth === 3) return d.parent.parent.data.name;
    return null;
};

const getSubcategory = d => {
    if (d.depth === 2) return d.data.name;
    if (d.depth === 3) return d.parent.data.name;
    return null;
};

const isHighlighted = d => {
    if (d.data.highlighted !== undefined) return d.data.highlighted;
    if (d.children) {
        return d.children.some(child => isHighlighted(child));
    }
    return false;
};

const name = d => d.data.name;

const names = d => {
    const nodeName = name(d);
    const maxChars = Math.floor(d.r / 3.5);
    if (nodeName.length <= maxChars) return [nodeName];
    
    const words = nodeName.split(/\s+/);
    if (words.length === 1) {
        // Single long word - truncate
        return [nodeName.substring(0, maxChars - 2) + ".."];
    }
    
    const lines = [];
    let currentLine = words[0];
    
    for (let i = 1; i < words.length; i++) {
        if ((currentLine + " " + words[i]).length <= maxChars) {
            currentLine += " " + words[i];
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);
    return lines.slice(0, 3); // Max 3 lines
};

// Specify the number format for values.
const format = d3.format(",d");

// Create a categorical color scale.
const categoryColors = {
    "SOCIAL ASSETS": "#FF6B6B",
    "SPATIAL ASSETS": "#4ECDC4",
    "ECONOMIC ASSETS": "#45B7D1",
    "INSTITUTIONAL ASSETS": "#FFA07A"
};

const color = d => {
    const cat = getCategory(d);
    return categoryColors[cat] || "#999";
};

// Main chart rendering function
function renderChart() {
    // Clear existing chart
    d3.select("#chart").selectAll("*").remove();
    
    const dimensions = getChartDimensions();
    const width = dimensions.width;
    const height = dimensions.height;
    
    // Create the pack layout.
    pack = d3.pack()
        .size([width - margin * 2, height - margin * 2])
        .padding(d => d.depth === 0 ? 8 : d.depth === 1 ? 20 : d.depth === 2 ? 12 : 4);

    // Compute the hierarchy from the data
    root = pack(d3.hierarchy(fullAssetData)
        .sum(d => d.value || 0)
        .sort((a, b) => b.value - a.value));

    // Create the SVG container.
    svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-margin, -margin, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;")
        .attr("text-anchor", "middle");

    // Add background circles for categories (depth 1)
    const categoryNodes = svg.append("g")
        .selectAll("g")
        .data(root.descendants().filter(d => d.depth === 1))
        .join("g")
        .attr("transform", d => `translate(${d.x},${d.y})`)
        .attr("class", "category-bubble")
        .attr("data-category", d => d.data.name);

    categoryNodes.append("circle")
        .attr("r", d => d.r)
        .attr("fill", "none")
        .attr("stroke", d => categoryColors[d.data.name])
        .attr("stroke-width", 3)
        .attr("stroke-opacity", 0.5)
        .attr("fill-opacity", 0.05)
        .attr("fill", d => categoryColors[d.data.name]);

    // Add category labels - positioned at top for Social/Economic, right side for Spatial/Institutional
    const isMobile = width < 768;
    const labelScale = width < 480 ? 0.6 : width < 768 ? 0.8 : 1;
    
    categoryNodes.append("rect")
        .attr("x", d => {
            if (d.data.name === "SPATIAL ASSETS" || d.data.name === "INSTITUTIONAL ASSETS") {
                return d.r + 10 * labelScale; // Right side
            }
            return -100 * labelScale; // Top (centered)
        })
        .attr("y", d => {
            if (d.data.name === "SPATIAL ASSETS" || d.data.name === "INSTITUTIONAL ASSETS") {
                return -20; // Right side vertical center
            }
            return -d.r - 40 * labelScale; // Top
        })
        .attr("width", d => {
            if (d.data.name === "SPATIAL ASSETS" || d.data.name === "INSTITUTIONAL ASSETS") {
                return 210 * labelScale; // Wider for right side
            }
            return 200 * labelScale; // Top width
        })
        .attr("height", 35 * labelScale)
        .attr("fill", "white")
        .attr("opacity", 0.95)
        .attr("rx", 8)
        .attr("stroke", d => categoryColors[d.data.name])
        .attr("stroke-width", 3)
        .attr("pointer-events", "none");

    categoryNodes.append("text")
        .attr("x", d => {
            if (d.data.name === "SPATIAL ASSETS" || d.data.name === "INSTITUTIONAL ASSETS") {
                return d.r + 115 * labelScale; // Right side centered in box
            }
            return 0; // Top (centered)
        })
        .attr("y", d => {
            if (d.data.name === "SPATIAL ASSETS" || d.data.name === "INSTITUTIONAL ASSETS") {
                return 2; // Right side vertical center
            }
            return -d.r - 18 * labelScale; // Top
        })
        .text(d => d.data.name)
        .style("font-size", `${15 * labelScale}px`)
        .style("font-weight", "bold")
        .style("fill", d => categoryColors[d.data.name])
        .style("text-anchor", "middle")
        .attr("pointer-events", "none");

    // Add subcategory circles (depth 2)
    const subcategoryNodes = svg.append("g")
        .selectAll("g")
        .data(root.descendants().filter(d => d.depth === 2))
        .join("g")
        .attr("transform", d => `translate(${d.x},${d.y})`)
        .attr("class", "subcategory-bubble")
        .attr("data-category", d => getCategory(d));

    subcategoryNodes.append("circle")
        .attr("r", d => d.r)
        .attr("fill", d => color(d))
        .attr("fill-opacity", 0.3)
        .attr("stroke", d => isHighlighted(d) ? "gold" : "white")
        .attr("stroke-width", d => isHighlighted(d) ? 2 : 1);

    // Calculate text lines for each subcategory first
    subcategoryNodes.each(function(d) {
        const name = d.data.name;
        const words = name.split(/\s+/);
        const maxCharsPerLine = Math.floor(d.r / 2.8);
        
        let lines = [];
        let currentLine = words[0];
        
        for (let i = 1; i < words.length; i++) {
            if ((currentLine + " " + words[i]).length <= maxCharsPerLine) {
                currentLine += " " + words[i];
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);
        d.textLines = lines.slice(0, 3);
    });

    // Add background for subcategory labels with dynamic height
    subcategoryNodes.append("rect")
        .attr("x", d => -d.r * 1.0)
        .attr("y", d => -d.r + 2)
        .attr("width", d => d.r * 2.0)
        .attr("height", d => 12 + (d.textLines.length * 13))
        .attr("fill", "white")
        .attr("opacity", 0.9)
        .attr("rx", 4)
        .attr("pointer-events", "none");

    subcategoryNodes.append("text")
        .attr("y", d => -d.r + 15)
        .attr("class", "subcategory-label")
        .style("font-size", "10px")
        .style("font-weight", "700")
        .style("fill", "#111")
        .attr("pointer-events", "none")
        .each(function(d) {
            const text = d3.select(this);
            
            // Add tspans for each line
            d.textLines.forEach((line, i) => {
                text.append("tspan")
                    .attr("x", 0)
                    .attr("dy", i === 0 ? 0 : "1.1em")
                    .text(line);
            });
        });

    // Place each (leaf) node - individual assets (depth 3)
    const node = svg.append("g")
        .selectAll()
        .data(root.leaves())
        .join("g")
        .attr("transform", d => `translate(${d.x},${d.y})`)
        .attr("class", "bubble")
        .attr("data-category", d => getCategory(d))
        .attr("data-subcategory", d => getSubcategory(d));

    // Add tooltip functionality
    const tooltip = d3.select("#tooltip");

    // Add a title (now hidden, using custom tooltip instead)
    node.append("title")
        .text(d => `${d.data.name}\n${getSubcategory(d)}\n${getCategory(d)}`);

    // Detect touch device
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    // Add a filled circle with interactive features
    const circles = node.append("circle")
        .attr("fill-opacity", 0.8)
        .attr("fill", d => color(d))
        .attr("r", d => d.r)
        .attr("stroke", d => d.data.highlighted ? "gold" : "white")
        .attr("stroke-width", d => d.data.highlighted ? 2 : 0.5);

    // Mouse/Touch interaction handlers
    if (!isTouchDevice) {
        // Desktop: hover interactions
        circles
            .on("mouseover", function(event, d) {
                d3.select(this.parentNode).raise();
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr("r", d.r * 1.15)
                    .attr("fill-opacity", 1);
                
                showTooltip(event, d, tooltip);
            })
            .on("mousemove", function(event) {
                moveTooltip(event, tooltip);
            })
            .on("mouseout", function(event, d) {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr("r", d.r)
                    .attr("fill-opacity", 0.8);
                
                hideTooltip(tooltip);
            })
            .on("click", function(event, d) {
                event.stopPropagation();
                toggleActive(this, d);
                showDetailAlert(d);
            });
    } else {
        // Touch device: tap interactions
        let tapTimeout;
        let lastTap = 0;
        
        circles.on("touchstart", function(event, d) {
            event.preventDefault();
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            
            if (tapLength < 300 && tapLength > 0) {
                // Double tap - show details
                clearTimeout(tapTimeout);
                hideTooltip(tooltip);
                toggleActive(this, d);
                showDetailAlert(d);
            } else {
                // Single tap - show tooltip
                tapTimeout = setTimeout(() => {
                    d3.select(this.parentNode).raise();
                    showTooltip(event.touches[0], d, tooltip);
                    
                    // Auto-hide tooltip after 3 seconds
                    setTimeout(() => hideTooltip(tooltip), 3000);
                }, 100);
            }
            
            lastTap = currentTime;
        });
    }

    // Helper functions for interactions
    function showTooltip(event, d, tooltip) {
        const pageX = event.pageX || event.clientX + window.scrollX;
        const pageY = event.pageY || event.clientY + window.scrollY;
        
        // Position tooltip to avoid going off-screen
        const tooltipWidth = 250;
        const tooltipHeight = 100;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        let left = pageX + 10;
        let top = pageY - 10;
        
        // Adjust if tooltip goes off right edge
        if (left + tooltipWidth > viewportWidth) {
            left = pageX - tooltipWidth - 10;
        }
        
        // Adjust if tooltip goes off bottom edge
        if (top + tooltipHeight > viewportHeight) {
            top = pageY - tooltipHeight - 10;
        }
        
        tooltip
            .style("opacity", 1)
            .html(`
                <strong style="color: ${color(d)}">${d.data.name}</strong><br/>
                <em>Subcategory:</em> ${getSubcategory(d)}<br/>
                <em>Category:</em> ${getCategory(d)}<br/>
                ${d.data.highlighted ? '⭐ <strong>Highlighted Asset</strong>' : ''}
            `)
            .style("left", left + "px")
            .style("top", top + "px");
    }

    function moveTooltip(event, tooltip) {
        const pageX = event.pageX || event.clientX + window.scrollX;
        const pageY = event.pageY || event.clientY + window.scrollY;
        
        tooltip
            .style("left", (pageX + 10) + "px")
            .style("top", (pageY - 10) + "px");
    }

    function hideTooltip(tooltip) {
        tooltip.style("opacity", 0);
    }

    function toggleActive(element, d) {
        const isActive = d3.select(element.parentNode).classed("active");
        svg.selectAll(".bubble").classed("active", false);
        
        if (!isActive) {
            d3.select(element.parentNode).classed("active", true);
        }
    }

    function showDetailAlert(d) {
        alert(`Asset Details:\n\nAsset: ${d.data.name}\nSubcategory: ${getSubcategory(d)}\nCategory: ${getCategory(d)}\nHighlighted: ${d.data.highlighted ? 'Yes ⭐' : 'No'}`);
    }

    // Add a label for larger bubbles only (to avoid clutter)
    const text = node.filter(d => d.r > 20)
        .append("text")
        .attr("clip-path", d => `circle(${d.r - 2})`);

    // Add background rectangle for text readability
    node.filter(d => d.r > 20)
        .append("rect")
        .attr("x", d => -d.r * 0.8)
        .attr("y", d => -d.r * 0.3)
        .attr("width", d => d.r * 1.6)
        .attr("height", d => d.r * 0.6)
        .attr("fill", "white")
        .attr("opacity", 0.7)
        .attr("rx", 3)
        .attr("pointer-events", "none")
        .lower();

    // Add text for asset name
    text.selectAll()
        .data(d => names(d))
        .join("tspan")
        .attr("x", 0)
        .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.3}em`)
        .text(d => d)
        .style("font-size", d => "8px")
        .style("font-weight", "500")
        .style("fill", "#000")
        .style("pointer-events", "none");

    // Add highlighted star indicator for leaf nodes
    node.filter(d => d.data.highlighted)
        .append("text")
        .attr("x", d => d.r - 10)
        .attr("y", d => -d.r + 10)
        .text("⭐")
        .style("font-size", "14px")
        .attr("pointer-events", "none");

    // Bring all subcategory elements (circles, backgrounds, and labels) to the very front
    const subcategoryGroup = svg.append("g").attr("class", "subcategory-front-layer");
    
    // Move all subcategory bubbles to the new front layer
    svg.selectAll(".subcategory-bubble").each(function() {
        subcategoryGroup.node().appendChild(this);
    });

    // Create legend
    const legendX = isMobile ? 10 : width - 180;
    const legendY = isMobile ? 10 : 20;
    
    const legend = svg.append("g")
        .attr("transform", `translate(${legendX}, ${legendY})`);

    const categories = Object.keys(categoryColors);
    const legendItems = legend.selectAll(".legend-item")
        .data(categories)
        .join("g")
        .attr("class", "legend-item")
        .attr("transform", (d, i) => `translate(0, ${i * 25})`);

    legendItems.append("circle")
        .attr("r", 8)
        .attr("fill", d => categoryColors[d])
        .attr("fill-opacity", 0.7);

    legendItems.append("text")
        .attr("x", 15)
        .attr("y", 4)
        .text(d => d)
        .style("font-size", "11px")
        .style("text-anchor", "start");

    // Make legend interactive
    legendItems
        .on("click", function(event, category) {
            filterCategory(category);
        })
        .on("mouseover", function() {
            d3.select(this).style("opacity", 0.7);
        })
        .on("mouseout", function() {
            d3.select(this).style("opacity", 1);
        });

    // Add highlighted legend item
    const highlightedLegend = legend.append("g")
        .attr("transform", `translate(0, ${categories.length * 25 + 10})`);

    highlightedLegend.append("circle")
        .attr("r", 8)
        .attr("fill", "#999")
        .attr("fill-opacity", 0.7)
        .attr("stroke", "gold")
        .attr("stroke-width", 2);

    highlightedLegend.append("text")
        .attr("x", 15)
        .attr("y", 4)
        .text("Highlighted ⭐")
        .style("font-size", "11px")
        .style("text-anchor", "start");

    // Append the chart to the DOM
    document.getElementById("chart").appendChild(svg.node());
}

// Interactive filter functions
let currentFilter = null;

function filterCategory(category) {
    currentFilter = category;
    
    // Update button states
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Animate all layers
    svg.selectAll(".category-bubble")
        .transition()
        .duration(500)
        .style("opacity", d => d.data.name === category ? 1 : 0.1);
    
    svg.selectAll(".subcategory-bubble")
        .transition()
        .duration(500)
        .style("opacity", d => getCategory(d) === category ? 1 : 0.1);
    
    svg.selectAll(".bubble")
        .transition()
        .duration(500)
        .style("opacity", d => getCategory(d) === category ? 1 : 0.05)
        .attr("pointer-events", d => getCategory(d) === category ? "all" : "none");
}

function showAll() {
    currentFilter = null;
    
    // Update button states
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    
    // Show all elements
    svg.selectAll(".category-bubble, .subcategory-bubble, .bubble")
        .transition()
        .duration(500)
        .style("opacity", 1)
        .attr("pointer-events", "all");
}

function showHighlighted() {
    currentFilter = 'highlighted';
    
    // Update button states
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    
    // Show only highlighted elements
    svg.selectAll(".category-bubble")
        .transition()
        .duration(500)
        .style("opacity", d => {
            // Check if this category has any highlighted children
            const hasHighlighted = root.descendants()
                .filter(node => getCategory(node) === d.data.name && node.data.highlighted)
                .length > 0;
            return hasHighlighted ? 1 : 0.1;
        });
    
    svg.selectAll(".subcategory-bubble")
        .transition()
        .duration(500)
        .style("opacity", d => isHighlighted(d) ? 1 : 0.1);
    
    svg.selectAll(".bubble")
        .transition()
        .duration(500)
        .style("opacity", d => d.data.highlighted ? 1 : 0.05)
        .attr("pointer-events", d => d.data.highlighted ? "all" : "none");
}

// Initialize chart on page load
document.addEventListener('DOMContentLoaded', function() {
    renderChart();
    
    // Add statistics
    const stats = document.createElement("div");
    stats.className = "stats";
    stats.innerHTML = `
        <p><strong>Hierarchical View:</strong> Large outer circles = Categories | Medium circles = Subcategories | Small circles = Individual Assets</p>
        <p>Total: 66 assets | Social: 20 (LARGEST) | Economic: 18 | Institutional: 17 | Spatial: 11</p>
        <p><strong>Highlighted subcategories (gold borders):</strong></p>
        <p>⭐ Skills & Productive Capacities (8 assets) | ⭐ Social capital & trust (6 assets)</p>
        <p>⭐ Skills & knowledge (5 assets) | ⭐ Informal & Mutual Economy (4 assets) | ⭐ Small Businesses (1 asset)</p>
    `;
    document.body.appendChild(stats);
    
    // Handle window resize for responsive behavior
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            renderChart();
        }, 250);
    });
});

// Function to download the chart as PNG
function downloadPNG() {
    const svgElement = document.querySelector('#chart svg');
    if (!svgElement) {
        alert('No chart found to export!');
        return;
    }
    
    // Clone the SVG to avoid modifying the original
    const svgClone = svgElement.cloneNode(true);
    
    // Get SVG dimensions
    const svgData = new XMLSerializer().serializeToString(svgClone);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match SVG
    const bbox = svgElement.getBBox();
    const width = parseInt(svgElement.getAttribute('width'));
    const height = parseInt(svgElement.getAttribute('height'));
    
    canvas.width = width;
    canvas.height = height;
    
    // Create image from SVG data
    const img = new Image();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = function() {
        // Fill white background
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw the SVG image
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        
        // Convert canvas to PNG and download
        canvas.toBlob(function(blob) {
            const link = document.createElement('a');
            link.download = 'asset-mapping-' + new Date().toISOString().slice(0, 10) + '.png';
            link.href = URL.createObjectURL(blob);
            link.click();
            URL.revokeObjectURL(link.href);
        });
    };
    
    img.src = url;
}
