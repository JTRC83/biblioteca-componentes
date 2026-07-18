/**
 * Landing templates importados desde templates/landing/.
 * Cada landing tiene: meta (metadata), prompt (descripcion estetica), design (tokens CSS), components (mapeo a biblioteca).
 */

import agencyMeta from '../../../../templates/landing/agency-dark/meta.json'
import agencyPreview from '../../../../templates/landing/agency-dark/preview.html?raw'
import ecommerceMeta from '../../../../templates/landing/ecommerce-shop/meta.json'
import ecommercePreview from '../../../../templates/landing/ecommerce-shop/preview.html?raw'
import eventsMeta from '../../../../templates/landing/events-conference/meta.json'
import eventsPreview from '../../../../templates/landing/events-conference/preview.html?raw'
import gymMeta from '../../../../templates/landing/gym-fitness/meta.json'
import gymPreview from '../../../../templates/landing/gym-fitness/preview.html?raw'
import healthcareMeta from '../../../../templates/landing/healthcare-clinic/meta.json'
import mobileMeta from '../../../../templates/landing/mobile-app/meta.json'
import portfolioMeta from '../../../../templates/landing/portfolio-minimal/meta.json'
import realestateMeta from '../../../../templates/landing/realestate-property/meta.json'
import restaurantMeta from '../../../../templates/landing/restaurant-cafe/meta.json'
import saasMeta from '../../../../templates/landing/saas-modern/meta.json'
import educationMeta from '../../../../templates/landing/education-academy/meta.json'
import travelMeta from '../../../../templates/landing/travel-tourism/meta.json'
import podcastMeta from '../../../../templates/landing/podcast-media/meta.json'
import legalMeta from '../../../../templates/landing/legal-consulting/meta.json'
import constructionMeta from '../../../../templates/landing/construction-contractor/meta.json'

import agencyPrompt from '../../../../templates/landing/agency-dark/prompt.md?raw'
import ecommercePrompt from '../../../../templates/landing/ecommerce-shop/prompt.md?raw'
import eventsPrompt from '../../../../templates/landing/events-conference/prompt.md?raw'
import gymPrompt from '../../../../templates/landing/gym-fitness/prompt.md?raw'
import healthcarePrompt from '../../../../templates/landing/healthcare-clinic/prompt.md?raw'
import mobilePrompt from '../../../../templates/landing/mobile-app/prompt.md?raw'
import portfolioPrompt from '../../../../templates/landing/portfolio-minimal/prompt.md?raw'
import realestatePrompt from '../../../../templates/landing/realestate-property/prompt.md?raw'
import restaurantPrompt from '../../../../templates/landing/restaurant-cafe/prompt.md?raw'
import saasPrompt from '../../../../templates/landing/saas-modern/prompt.md?raw'
import educationPrompt from '../../../../templates/landing/education-academy/prompt.md?raw'
import travelPrompt from '../../../../templates/landing/travel-tourism/prompt.md?raw'
import podcastPrompt from '../../../../templates/landing/podcast-media/prompt.md?raw'
import legalPrompt from '../../../../templates/landing/legal-consulting/prompt.md?raw'
import constructionPrompt from '../../../../templates/landing/construction-contractor/prompt.md?raw'

import agencyDesign from '../../../../templates/landing/agency-dark/design.md?raw'
import ecommerceDesign from '../../../../templates/landing/ecommerce-shop/design.md?raw'
import eventsDesign from '../../../../templates/landing/events-conference/design.md?raw'
import gymDesign from '../../../../templates/landing/gym-fitness/design.md?raw'
import healthcareDesign from '../../../../templates/landing/healthcare-clinic/design.md?raw'
import mobileDesign from '../../../../templates/landing/mobile-app/design.md?raw'
import portfolioDesign from '../../../../templates/landing/portfolio-minimal/design.md?raw'
import realestateDesign from '../../../../templates/landing/realestate-property/design.md?raw'
import restaurantDesign from '../../../../templates/landing/restaurant-cafe/design.md?raw'
import saasDesign from '../../../../templates/landing/saas-modern/design.md?raw'
import educationDesign from '../../../../templates/landing/education-academy/design.md?raw'
import travelDesign from '../../../../templates/landing/travel-tourism/design.md?raw'
import podcastDesign from '../../../../templates/landing/podcast-media/design.md?raw'
import legalDesign from '../../../../templates/landing/legal-consulting/design.md?raw'
import constructionDesign from '../../../../templates/landing/construction-contractor/design.md?raw'

import agencyComponents from '../../../../templates/landing/agency-dark/components.md?raw'
import ecommerceComponents from '../../../../templates/landing/ecommerce-shop/components.md?raw'
import eventsComponents from '../../../../templates/landing/events-conference/components.md?raw'
import gymComponents from '../../../../templates/landing/gym-fitness/components.md?raw'
import healthcareComponents from '../../../../templates/landing/healthcare-clinic/components.md?raw'
import mobileComponents from '../../../../templates/landing/mobile-app/components.md?raw'
import portfolioComponents from '../../../../templates/landing/portfolio-minimal/components.md?raw'
import realestateComponents from '../../../../templates/landing/realestate-property/components.md?raw'
import restaurantComponents from '../../../../templates/landing/restaurant-cafe/components.md?raw'
import saasComponents from '../../../../templates/landing/saas-modern/components.md?raw'
import educationComponents from '../../../../templates/landing/education-academy/components.md?raw'
import travelComponents from '../../../../templates/landing/travel-tourism/components.md?raw'
import podcastComponents from '../../../../templates/landing/podcast-media/components.md?raw'
import legalComponents from '../../../../templates/landing/legal-consulting/components.md?raw'
import constructionComponents from '../../../../templates/landing/construction-contractor/components.md?raw'

export const landings = [
  { ...agencyMeta, preview: agencyPreview, prompt: agencyPrompt, design: agencyDesign, components: agencyComponents },
  { ...ecommerceMeta, preview: ecommercePreview, prompt: ecommercePrompt, design: ecommerceDesign, components: ecommerceComponents },
  { ...eventsMeta, preview: eventsPreview, prompt: eventsPrompt, design: eventsDesign, components: eventsComponents },
  { ...gymMeta, preview: gymPreview, prompt: gymPrompt, design: gymDesign, components: gymComponents },
  { ...healthcareMeta, prompt: healthcarePrompt, design: healthcareDesign, components: healthcareComponents },
  { ...mobileMeta, prompt: mobilePrompt, design: mobileDesign, components: mobileComponents },
  { ...portfolioMeta, prompt: portfolioPrompt, design: portfolioDesign, components: portfolioComponents },
  { ...realestateMeta, prompt: realestatePrompt, design: realestateDesign, components: realestateComponents },
  { ...restaurantMeta, prompt: restaurantPrompt, design: restaurantDesign, components: restaurantComponents },
  { ...saasMeta, prompt: saasPrompt, design: saasDesign, components: saasComponents },
  { ...educationMeta, prompt: educationPrompt, design: educationDesign, components: educationComponents },
  { ...travelMeta, prompt: travelPrompt, design: travelDesign, components: travelComponents },
  { ...podcastMeta, prompt: podcastPrompt, design: podcastDesign, components: podcastComponents },
  { ...legalMeta, prompt: legalPrompt, design: legalDesign, components: legalComponents },
  { ...constructionMeta, prompt: constructionPrompt, design: constructionDesign, components: constructionComponents }
]

export function getLandingById(id) {
  return landings.find((l) => l.id === id) || null
}

export const landingStats = {
  total: landings.length
}