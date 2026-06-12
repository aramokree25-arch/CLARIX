// Clarix Peptides — shared product catalogue data
const PRODUCTS = [
  {id:1,  name:"Retatrutide",       strength:"10mg",  price:69.99, img:"brand_assets/ret-20mg.png",      slug:"retatrutide-10mg",   badge:"Bestseller",
   desc:"Tri-receptor GIP/GLP-1/glucagon agonist for advanced metabolic research.",
   descFull:"Retatrutide is a novel tri-agonist research peptide that simultaneously targets the GIP (glucose-dependent insulinotropic polypeptide), GLP-1 (glucagon-like peptide-1), and glucagon receptors. This unique triple-receptor activity offers researchers unparalleled insight into multi-pathway metabolic signalling, energy expenditure regulation, adipose tissue biology, and glucose homeostasis. Widely studied as one of the most potent investigational metabolic compounds currently available. Supplied as a pharmaceutical-grade lyophilised powder for in-vitro laboratory research use only.",
   molecularFormula:"Proprietary peptide sequence — data sheet available on request",
   batchNumber:"CX-RET-10-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:2,  name:"Retatrutide",       strength:"20mg",  price:94.99, img:"brand_assets/ret-20mg.png",      slug:"retatrutide-20mg",   badge:null,
   desc:"Tri-receptor GIP/GLP-1/glucagon agonist for advanced metabolic research.",
   descFull:"Retatrutide is a novel tri-agonist research peptide that simultaneously targets the GIP (glucose-dependent insulinotropic polypeptide), GLP-1 (glucagon-like peptide-1), and glucagon receptors. This unique triple-receptor activity offers researchers unparalleled insight into multi-pathway metabolic signalling, energy expenditure regulation, adipose tissue biology, and glucose homeostasis. Widely studied as one of the most potent investigational metabolic compounds currently available. Supplied as a pharmaceutical-grade lyophilised powder for in-vitro laboratory research use only.",
   molecularFormula:"Proprietary peptide sequence — data sheet available on request",
   batchNumber:"CX-RET-20-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:5,  name:"Tesamorelin",       strength:"2mg",   price:35.99, img:"brand_assets/tes-5mg.png",       slug:"tesamorelin-2mg",    badge:null,
   desc:"Synthetic GHRH analogue; studied for adipose tissue and GH secretion research.",
   descFull:"Tesamorelin is a synthetic analogue of growth hormone–releasing hormone (GHRH) comprising the full 44-amino acid GHRH sequence with a trans-3-hexenoic acid modification at the N-terminus to improve stability. It selectively stimulates GH secretion from anterior pituitary somatotrophs without affecting other pituitary hormones, making it a precise tool for GH-axis and visceral adipose tissue research.",
   molecularFormula:"C₂₂₁H₃₆₂N₆₆O₅₈S",
   batchNumber:"CX-TES-2-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:6,  name:"Tesamorelin",       strength:"5mg",   price:49.99, img:"brand_assets/tes-5mg.png",       slug:"tesamorelin-5mg",    badge:null,
   desc:"Synthetic GHRH analogue; studied for adipose tissue and GH secretion research.",
   descFull:"Tesamorelin is a synthetic analogue of growth hormone–releasing hormone (GHRH) comprising the full 44-amino acid GHRH sequence with a trans-3-hexenoic acid modification at the N-terminus to improve stability. It selectively stimulates GH secretion from anterior pituitary somatotrophs without affecting other pituitary hormones, making it a precise tool for GH-axis and visceral adipose tissue research.",
   molecularFormula:"C₂₂₁H₃₆₂N₆₆O₅₈S",
   batchNumber:"CX-TES-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:7,  name:"CJC-1295 (No DAC)", strength:"2mg",   price:21.99, img:"brand_assets/cjc-5mg.png",     slug:"cjc-1295-2mg",       badge:null,
   desc:"GHRH analogue with short half-life; used in pulsatile GH secretion studies.",
   descFull:"CJC-1295 (No DAC) — also referred to as Modified GRF 1–29 — is a truncated, stabilised analogue of the first 29 amino acids of GHRH. Unlike its DAC-containing counterpart, this version retains a physiologically short half-life, making it the preferred compound for studying pulsatile growth hormone release patterns and somatotroph receptor dynamics under controlled laboratory conditions.",
   molecularFormula:"C₁₅₂H₂₅₂N₄₄O₄₂",
   batchNumber:"CX-CJC-2-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:8,  name:"CJC-1295 (No DAC)", strength:"5mg",   price:34.99, img:"brand_assets/cjc-5mg.png",     slug:"cjc-1295-5mg",       badge:null,
   desc:"GHRH analogue with short half-life; used in pulsatile GH secretion studies.",
   descFull:"CJC-1295 (No DAC) — also referred to as Modified GRF 1–29 — is a truncated, stabilised analogue of the first 29 amino acids of GHRH. Unlike its DAC-containing counterpart, this version retains a physiologically short half-life, making it the preferred compound for studying pulsatile growth hormone release patterns and somatotroph receptor dynamics under controlled laboratory conditions.",
   molecularFormula:"C₁₅₂H₂₅₂N₄₄O₄₂",
   batchNumber:"CX-CJC-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:9,  name:"GHK-Cu",            strength:"50mg",  price:24.99, img:"brand_assets/ghk-50mg.png",     slug:"ghk-cu-50mg",        badge:null,
   desc:"Copper-binding tripeptide researched for tissue remodelling and cellular signalling.",
   descFull:"GHK-Cu is a naturally occurring copper(II) complex of the tripeptide Gly-His-Lys. Studies have investigated its role in fibroblast proliferation, extracellular matrix remodelling, collagen and elastin synthesis regulation, and antioxidant pathway activation. It is a key research compound in tissue biology, wound healing research, and cellular signalling studies.",
   molecularFormula:"C₁₄H₂₂CuN₆O₄",
   batchNumber:"CX-GHK-50-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:10, name:"GHK-Cu",            strength:"100mg", price:42.99, img:"brand_assets/ghk-50mg.png",     slug:"ghk-cu-100mg",       badge:null,
   desc:"Copper-binding tripeptide researched for tissue remodelling and cellular signalling.",
   descFull:"GHK-Cu is a naturally occurring copper(II) complex of the tripeptide Gly-His-Lys. Studies have investigated its role in fibroblast proliferation, extracellular matrix remodelling, collagen and elastin synthesis regulation, and antioxidant pathway activation. It is a key research compound in tissue biology, wound healing research, and cellular signalling studies.",
   molecularFormula:"C₁₄H₂₂CuN₆O₄",
   batchNumber:"CX-GHK-100-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:11, name:"BPC-157",           strength:"5mg",   price:21.99, img:"brand_assets/bpc-10mg.png",     slug:"bpc-157-5mg",        badge:null,
   desc:"Body protection compound; extensively studied for tissue healing and cytoprotection.",
   descFull:"BPC-157 is a synthetic pentadecapeptide derived from a region of the human Body Protection Compound found in gastric juice. It has been extensively studied in pre-clinical models for its cytoprotective and regenerative properties across gastrointestinal, musculoskeletal, and neural tissues. Proposed mechanisms include nitric oxide pathway modulation and localised angiogenic signalling.",
   molecularFormula:"C₆₂H₉₈N₁₆O₂₂",
   batchNumber:"CX-BPC-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:12, name:"BPC-157",           strength:"10mg",  price:29.99, img:"brand_assets/bpc-10mg.png",     slug:"bpc-157-10mg",       badge:null,
   desc:"Body protection compound; extensively studied for tissue healing and cytoprotection.",
   descFull:"BPC-157 is a synthetic pentadecapeptide derived from a region of the human Body Protection Compound found in gastric juice. It has been extensively studied in pre-clinical models for its cytoprotective and regenerative properties across gastrointestinal, musculoskeletal, and neural tissues. Proposed mechanisms include nitric oxide pathway modulation and localised angiogenic signalling.",
   molecularFormula:"C₆₂H₉₈N₁₆O₂₂",
   batchNumber:"CX-BPC-10-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:13, name:"TB-500",            strength:"5mg",   price:27.99, img:"brand_assets/tb-5mg.png",       slug:"tb-500-5mg",         badge:null,
   desc:"Thymosin β4-derived fragment; researched for tissue repair and cellular migration.",
   descFull:"TB-500 is a synthetic analogue of the naturally occurring thymic peptide Thymosin β4. Its primary research mechanisms centre on actin sequestration, facilitated cell migration, and angiogenesis promotion. Pre-clinical studies have explored its role in skeletal muscle repair, cardiac tissue recovery, tendon healing, and neural repair models. Supplied as a lyophilised solid for laboratory reconstitution.",
   molecularFormula:"C₂₁₂H₃₅₀N₅₆O₇₈S",
   batchNumber:"CX-TB5-5-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:14, name:"TB-500",            strength:"10mg",  price:47.99, img:"brand_assets/tb-5mg.png",       slug:"tb-500-10mg",        badge:null,
   desc:"Thymosin β4-derived fragment; researched for tissue repair and cellular migration.",
   descFull:"TB-500 is a synthetic analogue of the naturally occurring thymic peptide Thymosin β4. Its primary research mechanisms centre on actin sequestration, facilitated cell migration, and angiogenesis promotion. Pre-clinical studies have explored its role in skeletal muscle repair, cardiac tissue recovery, tendon healing, and neural repair models. Supplied as a lyophilised solid for laboratory reconstitution.",
   molecularFormula:"C₂₁₂H₃₅₀N₅₆O₇₈S",
   batchNumber:"CX-TB5-10-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:15, name:"Melanotan II",      strength:"10mg",  price:26.99, img:"brand_assets/mt-10mg.png",     slug:"melanotan-ii-10mg",  badge:"New",
   desc:"Melanocortin receptor agonist studied for pigmentation and related research pathways.",
   descFull:"Melanotan II is a synthetic analogue of alpha-melanocyte stimulating hormone (α-MSH) that acts as a non-selective agonist at melanocortin receptors MC1R–MC4R. Research applications include pigmentation biology, energy homeostasis signalling, and neuropeptide pathway studies. Supplied as a lyophilised powder for in-vitro laboratory use only.",
   molecularFormula:"C₅₀H₆₉N₁₅O₉",
   batchNumber:"CX-MT2-10-001", form:"Lyophilised Solid", mixingWaterRequired:true},

  {id:16, name:"Bacteriostatic Water", strength:"10ml", price:9.99, img:"brand_assets/bac-10ml.png",   slug:"bacteriostatic-water-10ml", badge:null,
   desc:"0.9% benzyl alcohol sterile water for reconstituting lyophilised research peptides.",
   descFull:"Bacteriostatic Water for Injection contains 0.9% benzyl alcohol as a preservative. It is used as a diluent for reconstituting lyophilised research peptides prior to laboratory use. Multi-dose vial format. For in-vitro and laboratory use only. Not for human or veterinary administration.",
   molecularFormula:"H₂O + 0.9% Benzyl Alcohol",
   batchNumber:"CX-BW-10-001", form:"Sterile Solution", mixingWaterRequired:false},
];

// Grouped compounds for shop grid
const COMPOUNDS = [
  {slug:"retatrutide",  name:"Retatrutide",          badge:"Bestseller", variants:[{id:1,strength:"10mg",price:69.99,img:"brand_assets/ret-20mg.png"},{id:2,strength:"20mg",price:94.99,img:"brand_assets/ret-20mg.png"}]},
  {slug:"tesamorelin",  name:"Tesamorelin",           badge:null,         variants:[{id:5,strength:"2mg",price:35.99,img:"brand_assets/tes-5mg.png"},{id:6,strength:"5mg",price:49.99,img:"brand_assets/tes-5mg.png"}]},
  {slug:"cjc-1295",     name:"CJC-1295 (No DAC)",    badge:null,         variants:[{id:7,strength:"2mg",price:21.99,img:"brand_assets/cjc-5mg.png"},{id:8,strength:"5mg",price:34.99,img:"brand_assets/cjc-5mg.png"}]},
  {slug:"ghk-cu",       name:"GHK-Cu",                badge:null,         variants:[{id:9,strength:"50mg",price:24.99,img:"brand_assets/ghk-50mg.png"},{id:10,strength:"100mg",price:42.99,img:"brand_assets/ghk-50mg.png"}]},
  {slug:"bpc-157",      name:"BPC-157",               badge:null,         variants:[{id:11,strength:"5mg",price:21.99,img:"brand_assets/bpc-10mg.png"},{id:12,strength:"10mg",price:29.99,img:"brand_assets/bpc-10mg.png"}]},
  {slug:"tb-500",       name:"TB-500",                badge:null,         variants:[{id:13,strength:"5mg",price:27.99,img:"brand_assets/tb-5mg.png"},{id:14,strength:"10mg",price:47.99,img:"brand_assets/tb-5mg.png"}]},
  {slug:"melanotan-ii", name:"Melanotan II",          badge:"New",        variants:[{id:15,strength:"10mg",price:26.99,img:"brand_assets/mt-10mg.png"}]},
  {slug:"bacteriostatic-water", name:"Bacteriostatic Water", badge:null, variants:[{id:16,strength:"10ml",price:9.99,img:"brand_assets/bac-10ml.png"}]},
];
