const REF_MUHURTA_CHINTAMANI_VIVAH = {
  id: "REF_MUHURTA_CHINTAMANI_VIVAH",
  tier: "CLASSICAL_JYOTISH_TEXT",
  sourceName: "Muhurta Chintamani (Vivaha Prakarana)",
  verified: true
};
const REF_BPHS_VIVAH = {
  id: "REF_BPHS_VIVAH",
  tier: "PRIMARY_SCRIPTURE",
  sourceName: "Brihat Parashara Hora Shastra",
  verified: true
};
const KUNDALI_MILAN_RULE_PACK = {
  metadata: {
    module: "kundali_milan",
    version: "1.0.0",
    description: "Declarative 36-Gun Ashtakoot Milan, Nadi/Bhakoot Dosha, and Parihar cancellation rules",
    updatedAt: "2026-11-20"
  },
  rules: [
    {
      id: "MIL_SCORE_EXCELLENT_001",
      version: "1.0.0",
      module: "kundali_milan",
      category: "ashtakoot_verdict",
      conflictGroup: "milan_overall_verdict",
      priority: 80,
      when: {
        field: "totalScore",
        op: "gte",
        value: 25
      },
      produces: {
        conceptKey: "milan.overall_score_verdict",
        domain: "milan_verdict",
        polarity: "AUSPICIOUS",
        templateKey: "milan.verdict.excellent",
        slots: {},
        slotBindings: {
          totalScore: "totalScore",
          maxScore: "maxScore"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI_VIVAH],
      evidenceStatus: "VERIFIED_DATA"
    },
    {
      id: "MIL_SCORE_MODERATE_002",
      version: "1.0.0",
      module: "kundali_milan",
      category: "ashtakoot_verdict",
      conflictGroup: "milan_overall_verdict",
      priority: 70,
      when: {
        all: [
          { field: "totalScore", op: "gte", value: 18 },
          { field: "totalScore", op: "lt", value: 25 }
        ]
      },
      produces: {
        conceptKey: "milan.overall_score_verdict",
        domain: "milan_verdict",
        polarity: "NEUTRAL",
        templateKey: "milan.verdict.moderate",
        slots: {},
        slotBindings: {
          totalScore: "totalScore",
          maxScore: "maxScore"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI_VIVAH],
      evidenceStatus: "VERIFIED_DATA"
    },
    {
      id: "MIL_SCORE_LOW_003",
      version: "1.0.0",
      module: "kundali_milan",
      category: "ashtakoot_verdict",
      conflictGroup: "milan_overall_verdict",
      priority: 75,
      when: {
        field: "totalScore",
        op: "lt",
        value: 18
      },
      produces: {
        conceptKey: "milan.overall_score_verdict",
        domain: "milan_verdict",
        polarity: "CAUTION",
        templateKey: "milan.verdict.low",
        slots: {},
        slotBindings: {
          totalScore: "totalScore",
          maxScore: "maxScore"
        }
      },
      references: [REF_MUHURTA_CHINTAMANI_VIVAH],
      evidenceStatus: "VERIFIED_DATA"
    },
    {
      id: "MIL_NADI_DOSHA_ACTIVE_004",
      version: "1.0.0",
      module: "kundali_milan",
      category: "koot_dosha",
      conflictGroup: "nadi_dosha_verdict",
      priority: 80,
      when: {
        all: [
          { field: "hasNadiDosha", op: "equals", value: true },
          { field: "nadiDoshaCancelled", op: "equals", value: false }
        ]
      },
      produces: {
        conceptKey: "milan.nadi_dosha",
        domain: "dosha_and_parihar",
        polarity: "CAUTION",
        templateKey: "milan.dosha.nadi_active",
        slots: {}
      },
      references: [REF_MUHURTA_CHINTAMANI_VIVAH],
      evidenceStatus: "RULE_SUPPORTED"
    },
    {
      id: "MIL_NADI_DOSHA_PARIHAR_005",
      version: "1.0.0",
      module: "kundali_milan",
      category: "koot_dosha",
      conflictGroup: "nadi_dosha_verdict",
      isException: true,
      priority: 95,
      when: {
        all: [
          { field: "hasNadiDosha", op: "equals", value: true },
          { field: "nadiDoshaCancelled", op: "equals", value: true }
        ]
      },
      produces: {
        conceptKey: "milan.nadi_dosha",
        domain: "dosha_and_parihar",
        polarity: "AUSPICIOUS",
        templateKey: "milan.dosha.nadi_cancelled",
        slots: {}
      },
      references: [REF_BPHS_VIVAH, REF_MUHURTA_CHINTAMANI_VIVAH],
      evidenceStatus: "RULE_SUPPORTED"
    }
  ]
};
export {
  KUNDALI_MILAN_RULE_PACK
};
