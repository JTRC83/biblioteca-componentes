/**
 * Design systems importados desde templates/design/.
 * Cada design system tiene: meta (metadata), preview (HTML completo), design (DESIGN.md spec), components (mapeo).
 *
 * Los archivos se importan con ?raw (Vite) para tener el contenido como string.
 * Los meta.json se importan como objetos JS.
 */

import glassmorphismMeta from '../../../../templates/design/glassmorphism-dark/meta.json'
import editorialMeta from '../../../../templates/design/editorial-clean/meta.json'
import neonMeta from '../../../../templates/design/neon-cyber/meta.json'
import neumorphicMeta from '../../../../templates/design/neumorphic-soft/meta.json'
import brutalistMeta from '../../../../templates/design/brutalist-raw/meta.json'
import corporateMeta from '../../../../templates/design/corporate-blue/meta.json'
import warmEarthMeta from '../../../../templates/design/warm-earth/meta.json'
import pastelMeta from '../../../../templates/design/pastel-dream/meta.json'
import monoTerminalMeta from '../../../../templates/design/mono-terminal/meta.json'
import gradientVividMeta from '../../../../templates/design/gradient-vivid/meta.json'
import luxuryGoldMeta from '../../../../templates/design/luxury-gold/meta.json'
import natureGreenMeta from '../../../../templates/design/nature-green/meta.json'
import midnightMinimalMeta from '../../../../templates/design/midnight-minimal/meta.json'
import sunsetOrangeMeta from '../../../../templates/design/sunset-orange/meta.json'
import oceanGlassMeta from '../../../../templates/design/ocean-glass/meta.json'
import bauhausMeta from '../../../../templates/design/bauhaus/meta.json'
import monochromeMinimalMeta from '../../../../templates/design/monochrome-minimal/meta.json'
import retro80sMeta from '../../../../templates/design/retro-80s/meta.json'
import nordicWoodMeta from '../../../../templates/design/nordic-wood/meta.json'
import cyberpunkAmberMeta from '../../../../templates/design/cyberpunk-amber/meta.json'

import glassmorphismPreview from '../../../../templates/design/glassmorphism-dark/preview.html?raw'
import editorialPreview from '../../../../templates/design/editorial-clean/preview.html?raw'
import neonPreview from '../../../../templates/design/neon-cyber/preview.html?raw'
import neumorphicPreview from '../../../../templates/design/neumorphic-soft/preview.html?raw'
import brutalistPreview from '../../../../templates/design/brutalist-raw/preview.html?raw'
import corporatePreview from '../../../../templates/design/corporate-blue/preview.html?raw'
import warmEarthPreview from '../../../../templates/design/warm-earth/preview.html?raw'
import pastelPreview from '../../../../templates/design/pastel-dream/preview.html?raw'
import monoTerminalPreview from '../../../../templates/design/mono-terminal/preview.html?raw'
import gradientVividPreview from '../../../../templates/design/gradient-vivid/preview.html?raw'
import luxuryGoldPreview from '../../../../templates/design/luxury-gold/preview.html?raw'
import natureGreenPreview from '../../../../templates/design/nature-green/preview.html?raw'
import midnightMinimalPreview from '../../../../templates/design/midnight-minimal/preview.html?raw'
import sunsetOrangePreview from '../../../../templates/design/sunset-orange/preview.html?raw'
import oceanGlassPreview from '../../../../templates/design/ocean-glass/preview.html?raw'
import bauhausPreview from '../../../../templates/design/bauhaus/preview.html?raw'
import monochromeMinimalPreview from '../../../../templates/design/monochrome-minimal/preview.html?raw'
import retro80sPreview from '../../../../templates/design/retro-80s/preview.html?raw'
import nordicWoodPreview from '../../../../templates/design/nordic-wood/preview.html?raw'
import cyberpunkAmberPreview from '../../../../templates/design/cyberpunk-amber/preview.html?raw'

import glassmorphismDesign from '../../../../templates/design/glassmorphism-dark/DESIGN.md?raw'
import editorialDesign from '../../../../templates/design/editorial-clean/DESIGN.md?raw'
import neonDesign from '../../../../templates/design/neon-cyber/DESIGN.md?raw'
import neumorphicDesign from '../../../../templates/design/neumorphic-soft/DESIGN.md?raw'
import brutalistDesign from '../../../../templates/design/brutalist-raw/DESIGN.md?raw'
import corporateDesign from '../../../../templates/design/corporate-blue/DESIGN.md?raw'
import warmEarthDesign from '../../../../templates/design/warm-earth/DESIGN.md?raw'
import pastelDesign from '../../../../templates/design/pastel-dream/DESIGN.md?raw'
import monoTerminalDesign from '../../../../templates/design/mono-terminal/DESIGN.md?raw'
import gradientVividDesign from '../../../../templates/design/gradient-vivid/DESIGN.md?raw'
import luxuryGoldDesign from '../../../../templates/design/luxury-gold/DESIGN.md?raw'
import natureGreenDesign from '../../../../templates/design/nature-green/DESIGN.md?raw'
import midnightMinimalDesign from '../../../../templates/design/midnight-minimal/DESIGN.md?raw'
import sunsetOrangeDesign from '../../../../templates/design/sunset-orange/DESIGN.md?raw'
import oceanGlassDesign from '../../../../templates/design/ocean-glass/DESIGN.md?raw'
import bauhausDesign from '../../../../templates/design/bauhaus/DESIGN.md?raw'
import monochromeMinimalDesign from '../../../../templates/design/monochrome-minimal/DESIGN.md?raw'
import retro80sDesign from '../../../../templates/design/retro-80s/DESIGN.md?raw'
import nordicWoodDesign from '../../../../templates/design/nordic-wood/DESIGN.md?raw'
import cyberpunkAmberDesign from '../../../../templates/design/cyberpunk-amber/DESIGN.md?raw'

import glassmorphismComponents from '../../../../templates/design/glassmorphism-dark/components.md?raw'
import editorialComponents from '../../../../templates/design/editorial-clean/components.md?raw'
import neonComponents from '../../../../templates/design/neon-cyber/components.md?raw'
import neumorphicComponents from '../../../../templates/design/neumorphic-soft/components.md?raw'
import brutalistComponents from '../../../../templates/design/brutalist-raw/components.md?raw'
import corporateComponents from '../../../../templates/design/corporate-blue/components.md?raw'
import warmEarthComponents from '../../../../templates/design/warm-earth/components.md?raw'
import pastelComponents from '../../../../templates/design/pastel-dream/components.md?raw'
import monoTerminalComponents from '../../../../templates/design/mono-terminal/components.md?raw'
import gradientVividComponents from '../../../../templates/design/gradient-vivid/components.md?raw'
import luxuryGoldComponents from '../../../../templates/design/luxury-gold/components.md?raw'
import natureGreenComponents from '../../../../templates/design/nature-green/components.md?raw'
import midnightMinimalComponents from '../../../../templates/design/midnight-minimal/components.md?raw'
import sunsetOrangeComponents from '../../../../templates/design/sunset-orange/components.md?raw'
import oceanGlassComponents from '../../../../templates/design/ocean-glass/components.md?raw'
import bauhausComponents from '../../../../templates/design/bauhaus/components.md?raw'
import monochromeMinimalComponents from '../../../../templates/design/monochrome-minimal/components.md?raw'
import retro80sComponents from '../../../../templates/design/retro-80s/components.md?raw'
import nordicWoodComponents from '../../../../templates/design/nordic-wood/components.md?raw'
import cyberpunkAmberComponents from '../../../../templates/design/cyberpunk-amber/components.md?raw'

export const designSystems = [
  {
    ...glassmorphismMeta,
    preview: glassmorphismPreview,
    design: glassmorphismDesign,
    components: glassmorphismComponents
  },
  {
    ...editorialMeta,
    preview: editorialPreview,
    design: editorialDesign,
    components: editorialComponents
  },
  {
    ...neonMeta,
    preview: neonPreview,
    design: neonDesign,
    components: neonComponents
  },
  {
    ...neumorphicMeta,
    preview: neumorphicPreview,
    design: neumorphicDesign,
    components: neumorphicComponents
  },
  {
    ...brutalistMeta,
    preview: brutalistPreview,
    design: brutalistDesign,
    components: brutalistComponents
  },
  {
    ...corporateMeta,
    preview: corporatePreview,
    design: corporateDesign,
    components: corporateComponents
  },
  {
    ...warmEarthMeta,
    preview: warmEarthPreview,
    design: warmEarthDesign,
    components: warmEarthComponents
  },
  {
    ...pastelMeta,
    preview: pastelPreview,
    design: pastelDesign,
    components: pastelComponents
  },
  {
    ...monoTerminalMeta,
    preview: monoTerminalPreview,
    design: monoTerminalDesign,
    components: monoTerminalComponents
  },
  {
    ...gradientVividMeta,
    preview: gradientVividPreview,
    design: gradientVividDesign,
    components: gradientVividComponents
  },
  {
    ...luxuryGoldMeta,
    preview: luxuryGoldPreview,
    design: luxuryGoldDesign,
    components: luxuryGoldComponents
  },
  {
    ...natureGreenMeta,
    preview: natureGreenPreview,
    design: natureGreenDesign,
    components: natureGreenComponents
  },
  {
    ...midnightMinimalMeta,
    preview: midnightMinimalPreview,
    design: midnightMinimalDesign,
    components: midnightMinimalComponents
  },
  {
    ...sunsetOrangeMeta,
    preview: sunsetOrangePreview,
    design: sunsetOrangeDesign,
    components: sunsetOrangeComponents
  },
  {
    ...oceanGlassMeta,
    preview: oceanGlassPreview,
    design: oceanGlassDesign,
    components: oceanGlassComponents
  },
  {
    ...bauhausMeta,
    preview: bauhausPreview,
    design: bauhausDesign,
    components: bauhausComponents
  },
  {
    ...monochromeMinimalMeta,
    preview: monochromeMinimalPreview,
    design: monochromeMinimalDesign,
    components: monochromeMinimalComponents
  },
  {
    ...retro80sMeta,
    preview: retro80sPreview,
    design: retro80sDesign,
    components: retro80sComponents
  },
  {
    ...nordicWoodMeta,
    preview: nordicWoodPreview,
    design: nordicWoodDesign,
    components: nordicWoodComponents
  },
  {
    ...cyberpunkAmberMeta,
    preview: cyberpunkAmberPreview,
    design: cyberpunkAmberDesign,
    components: cyberpunkAmberComponents
  }
]

export function getDesignSystemById(id) {
  return designSystems.find((d) => d.id === id) || null
}

export const designStats = {
  total: designSystems.length
}