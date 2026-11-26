const REF_BPHS = {
  id: "REF_BPHS",
  tier: "PRIMARY_SCRIPTURE",
  sourceName: "Brihat Parashara Hora Shastra",
  verified: true
};
const REF_PHALADEEPIKA = {
  id: "REF_PHALADEEPIKA",
  tier: "CLASSICAL_JYOTISH_TEXT",
  sourceName: "Phaladeepika",
  verified: true
};
const KUNDALI_RULE_PACK = {
  metadata: {
    module: "kundali",
    version: "1.0.0",
    description: "Declarative natal Lagna, Raj Yoga, Mahadasha, and Dosha interpretation rules",
    updatedAt: "2026-11-20"
  },
  rules: [
    {
      id: "KUN_LAGNA_IDENTITY_001",
      version: "1.0.0",
      module: "kundali",
      category: "natal_foundation",
      priority: 100,
      when: {
        all: [
          { field: "lagnaName", op: "exists", value: true },
          { field: "moonRashiName", op: "exists", value: true }
        ]
      },
      produces: {
        conceptKey: "kundali.natal_foundation",
        domain: "natal_foundation",
        polarity: "NEUTRAL",
        templateKey: "kundali.foundation.identity",
        slots: {},
        slotBindings: {
          lagnaName: "lagnaName",
          lagnaLord: "lagnaLord",
          moonRashiName: "moonRashiName",
          nakshatraName: "nakshatraName"
        }
      },
      references: [REF_BPHS],
      evidenceStatus: "VERIFIED_DATA"
    },
    {
      id: "KUN_RAJYOGA_STRONG_002",
      version: "1.0.0",
      module: "kundali",
      category: "yogas",
      priority: 85,
      when: {
        all: [
          { field: "rajYogaCount", op: "gte", value: 1 },
          { field: "hasStrongRajYoga", op: "equals", value: true }
        ]
      },
      produces: {
        conceptKey: "kundali.raj_yoga_strength",
        domain: "yogas_and_strength",
        polarity: "AUSPICIOUS",
        templateKey: "kundali.yoga.strong_rajyoga",
        slots: {},
        slotBindings: {
          rajYogaCount: "rajYogaCount",
          exaltedPlanetCount: "exaltedPlanetCount"
        }
      },
      references: [REF_BPHS, REF_PHALADEEPIKA],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "KUN_DASHA_ACTIVE_003",
      version: "1.0.0",
      module: "kundali",
      category: "dasha",
      priority: 80,
      when: {
        field: "currentMahadashaPlanet",
        op: "exists",
        value: true
      },
      produces: {
        conceptKey: "kundali.active_mahadasha",
        domain: "dasha_outlook",
        polarity: "NEUTRAL",
        templateKey: "kundali.dasha.current",
        slots: {},
        slotBindings: {
          currentMahadashaPlanet: "currentMahadashaPlanet",
          currentAntardashaPlanet: "currentAntardashaPlanet"
        }
      },
      references: [REF_BPHS],
      evidenceStatus: "VERIFIED_DATA"
    },
    {
      id: "KUN_MANGLIK_PRESENT_004",
      version: "1.0.0",
      module: "kundali",
      category: "dosha",
      priority: 75,
      when: {
        field: "doshas.isManglik",
        op: "equals",
        value: true
      },
      produces: {
        conceptKey: "kundali.manglik_assessment",
        domain: "dosha_assessment",
        polarity: "CAUTION",
        templateKey: "kundali.dosha.manglik",
        slots: {},
        slotBindings: {
          manglikSeverity: "doshas.manglikSeverity",
          marsHouse: "doshas.marsHouse"
        }
      },
      references: [REF_PHALADEEPIKA],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "KUN_BIRTH_TIME_UNCERTAIN_NOTE_005",
      version: "1.0.0",
      module: "kundali",
      category: "data_precision",
      priority: 95,
      when: {
        field: "birthTimeUncertain",
        op: "equals",
        value: true
      },
      produces: {
        conceptKey: "kundali.birth_time_uncertainty_notice",
        domain: "data_precision",
        polarity: "CAUTION",
        templateKey: "kundali.precision.uncertain_time",
        slots: {}
      },
      references: [REF_BPHS],
      evidenceStatus: "PARTIALLY_SUPPORTED"
    }
  ]
};
export {
  KUNDALI_RULE_PACK
};
