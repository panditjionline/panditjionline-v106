const REF_MUHURTA_CHINTAMANI = {
  id: "REF_MUHURTA_CHINTAMANI",
  tier: "CLASSICAL_JYOTISH_TEXT",
  sourceName: "Muhurta Chintamani",
  verified: true
};
const REF_DHARMA_SINDHU = {
  id: "REF_DHARMA_SINDHU",
  tier: "PRIMARY_SCRIPTURE",
  sourceName: "Dharma Sindhu",
  verified: true
};
const REF_NIRNAYA_SINDHU = {
  id: "REF_NIRNAYA_SINDHU",
  tier: "PRIMARY_SCRIPTURE",
  sourceName: "Nirnaya Sindhu",
  verified: true
};
const REF_TRADITIONAL_PANCHANG = {
  id: "REF_TRADITIONAL_PANCHANG",
  tier: "TRADITIONAL_INTERPRETATION",
  sourceName: "Traditional Drik Ganita Panchang Parampara",
  verified: true
};
const PANCHANG_RULE_PACK = {
  metadata: {
    module: "panchang",
    version: "1.0.0",
    description: "Declarative Panchang interpretation, auspicious yoga, and caution rules",
    updatedAt: "2026-11-20"
  },
  rules: [
    {
      id: "PAN_OVERVIEW_CORE_001",
      version: "1.0.0",
      module: "panchang",
      category: "panchang_overview",
      priority: 100,
      when: {
        all: [
          { field: "tithiName", op: "exists", value: true },
          { field: "nakshatraName", op: "exists", value: true },
          { field: "vaarName", op: "exists", value: true }
        ]
      },
      produces: {
        conceptKey: "panchang.daily_core_identity",
        domain: "panchang_overview",
        polarity: "NEUTRAL",
        templateKey: "panchang.core_identity",
        slots: {},
        slotBindings: {
          vaarName: "vaarName",
          pakshaLabelHi: "pakshaLabelHi",
          tithiName: "tithiName",
          nakshatraName: "nakshatraName",
          yogaName: "yogaName",
          karanaName: "karanaName"
        }
      },
      references: [REF_TRADITIONAL_PANCHANG],
      evidenceStatus: "VERIFIED_DATA"
    },
    {
      id: "PAN_VERDICT_GENERAL_SHUKLA_001",
      version: "1.0.0",
      module: "panchang",
      category: "day_verdict",
      conflictGroup: "panchang_day_verdict",
      priority: 30,
      when: {
        all: [
          { field: "paksha", op: "equals", value: "shukla" },
          { field: "tithiCategory", op: "in", value: ["nanda", "bhadra", "jaya", "purna", "purnima"] }
        ]
      },
      produces: {
        conceptKey: "panchang.day_auspiciousness_verdict",
        domain: "day_auspiciousness",
        polarity: "AUSPICIOUS",
        templateKey: "panchang.verdict.shukla_auspicious",
        slots: {},
        slotBindings: {
          tithiName: "tithiName",
          nakshatraName: "nakshatraName"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "PAN_VERDICT_RIKTA_CAUTION_002",
      version: "1.0.0",
      module: "panchang",
      category: "day_verdict",
      conflictGroup: "panchang_day_verdict",
      priority: 45,
      when: {
        field: "tithiCategory",
        op: "equals",
        value: "rikta"
      },
      produces: {
        conceptKey: "panchang.day_auspiciousness_verdict",
        domain: "day_auspiciousness",
        polarity: "CAUTION",
        templateKey: "panchang.verdict.rikta_tithi",
        slots: {},
        slotBindings: {
          tithiName: "tithiName"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "PAN_VERDICT_SARVARTHA_OVERRIDE_003",
      version: "1.0.0",
      module: "panchang",
      category: "day_verdict",
      conflictGroup: "panchang_day_verdict",
      isException: true,
      priority: 85,
      when: {
        all: [
          { field: "yogas.hasSarvarthaSiddhi", op: "equals", value: true },
          { field: "cautions.hasBhadra", op: "equals", value: false }
        ]
      },
      produces: {
        conceptKey: "panchang.day_auspiciousness_verdict",
        domain: "day_auspiciousness",
        polarity: "AUSPICIOUS",
        templateKey: "panchang.verdict.sarvartha_siddhi",
        slots: {},
        slotBindings: {
          sarvarthaSiddhiWindow: "yogas.sarvarthaSiddhiWindow",
          nakshatraName: "nakshatraName"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "PAN_VERDICT_BHADRA_MIXED_EXCEPTION_004",
      version: "1.0.0",
      module: "panchang",
      category: "day_verdict",
      conflictGroup: "panchang_day_verdict",
      isException: true,
      specificityScore: 4,
      priority: 95,
      when: {
        all: [
          { field: "yogas.hasSarvarthaSiddhi", op: "equals", value: true },
          { field: "cautions.hasBhadra", op: "equals", value: true }
        ]
      },
      produces: {
        conceptKey: "panchang.day_auspiciousness_verdict",
        domain: "day_auspiciousness",
        polarity: "MIXED",
        templateKey: "panchang.verdict.sarvartha_with_bhadra",
        slots: {},
        slotBindings: {
          sarvarthaSiddhiWindow: "yogas.sarvarthaSiddhiWindow",
          bhadraWindow: "cautions.bhadraWindow"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI, REF_DHARMA_SINDHU],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "PAN_OBSERVANCE_EKADASHI_005",
      version: "1.0.0",
      module: "panchang",
      category: "vrat_observance",
      priority: 90,
      when: {
        field: "observances.isEkadashi",
        op: "equals",
        value: true
      },
      produces: {
        conceptKey: "panchang.ekadashi_vrat_guidance",
        domain: "vrat_and_sadhana",
        polarity: "AUSPICIOUS",
        templateKey: "panchang.observance.ekadashi",
        slots: {},
        slotBindings: {
          pakshaLabelHi: "pakshaLabelHi",
          hinduMaas: "hinduMaas"
        }
      },
      references: [REF_DHARMA_SINDHU, REF_NIRNAYA_SINDHU],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "PAN_OBSERVANCE_PRADOSH_006",
      version: "1.0.0",
      module: "panchang",
      category: "vrat_observance",
      priority: 80,
      when: {
        field: "observances.isPradosh",
        op: "equals",
        value: true
      },
      produces: {
        conceptKey: "panchang.pradosh_vrat_guidance",
        domain: "vrat_and_sadhana",
        polarity: "AUSPICIOUS",
        templateKey: "panchang.observance.pradosh",
        slots: {},
        slotBindings: {
          vaarName: "vaarName"
        }
      },
      references: [REF_DHARMA_SINDHU],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "PAN_WINDOW_ABHIJIT_007",
      version: "1.0.0",
      module: "panchang",
      category: "muhurat_windows",
      priority: 75,
      when: {
        all: [
          { field: "yogas.hasAbhijit", op: "equals", value: true },
          { field: "yogas.abhijitWindow", op: "exists", value: true }
        ]
      },
      produces: {
        conceptKey: "panchang.abhijit_muhurat_window",
        domain: "auspicious_windows",
        polarity: "AUSPICIOUS",
        templateKey: "panchang.window.abhijit",
        slots: {},
        slotBindings: {
          abhijitWindow: "yogas.abhijitWindow"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI],
      evidenceStatus: "VERIFIED_DATA"
    },
    {
      id: "PAN_CAUTION_RAHUKAAL_008",
      version: "1.0.0",
      module: "panchang",
      category: "caution_windows",
      priority: 70,
      when: {
        all: [
          { field: "cautions.hasRahukaal", op: "equals", value: true },
          { field: "cautions.rahukaalWindow", op: "exists", value: true }
        ]
      },
      produces: {
        conceptKey: "panchang.rahukaal_caution",
        domain: "caution_windows",
        polarity: "CAUTION",
        templateKey: "panchang.caution.rahukaal",
        slots: {},
        slotBindings: {
          rahukaalWindow: "cautions.rahukaalWindow"
        }
      },
      references: [REF_TRADITIONAL_PANCHANG],
      evidenceStatus: "VERIFIED_DATA"
    },
    {
      id: "PAN_CAUTION_BHADRA_009",
      version: "1.0.0",
      module: "panchang",
      category: "caution_windows",
      priority: 85,
      when: {
        field: "cautions.hasBhadra",
        op: "equals",
        value: true
      },
      produces: {
        conceptKey: "panchang.bhadra_caution",
        domain: "caution_windows",
        polarity: "CAUTION",
        templateKey: "panchang.caution.bhadra",
        slots: {},
        slotBindings: {
          bhadraWindow: "cautions.bhadraWindow"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "PAN_CAUTION_PANCHAK_010",
      version: "1.0.0",
      module: "panchang",
      category: "caution_windows",
      priority: 72,
      when: {
        field: "cautions.hasPanchak",
        op: "equals",
        value: true
      },
      produces: {
        conceptKey: "panchang.panchak_caution",
        domain: "caution_windows",
        polarity: "CAUTION",
        templateKey: "panchang.caution.panchak",
        slots: {},
        slotBindings: {
          panchakWindow: "cautions.panchakWindow"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "PAN_CAUTION_DISHA_SHOOL_011",
      version: "1.0.0",
      module: "panchang",
      category: "travel_guidance",
      priority: 50,
      when: {
        field: "dishaShool",
        op: "exists",
        value: true
      },
      produces: {
        conceptKey: "panchang.disha_shool_guidance",
        domain: "travel_guidance",
        polarity: "NEUTRAL",
        templateKey: "panchang.travel.disha_shool",
        slots: {},
        slotBindings: {
          dishaShool: "dishaShool",
          vaarName: "vaarName"
        }
      },
      references: [REF_TRADITIONAL_PANCHANG],
      evidenceStatus: "VERIFIED_DATA"
    }
  ]
};
export {
  PANCHANG_RULE_PACK
};
