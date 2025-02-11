// hooks/useDynamicPricing.js
import { useEffect, useState } from "react";

const useDynamicPricing = () => {
    const [setupPrice, setSetupPrice] = useState("UGX 750,000");
    const [monthlyPrice, setMonthlyPrice] = useState("UGX 120,000");
    const [comparisonText, setComparisonText] = useState(
      "UGX 500,000 – 1M/month"
    );
    const [equivalentMonthly, setEquivalentMonthly] = useState(
      "UGX 182,500/month"
    );
  
    useEffect(() => {
      fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
          const countryCode = data.country_code;
          let currency = "USD";
  
          // Determine currency based on country
          if (countryCode === "UG") {
            currency = "UGX";
          } else if (countryCode === "CA") {
            currency = "CAD";
          } else if (countryCode === "US") {
            currency = "USD";
          } else if (countryCode === "AU") {
            currency = "AUD";
          } else if ([
            "AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE",
            "IT", "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI",
            "ES", "HR", "RO", "BG", "HU", "PL", "DK", "SE", "CZ"
          ].includes(countryCode)) {
            currency = "EUR";
          }
  
          // Pricing configurations
          const rates = {
            UGX: {
              setup: "UGX 750,000",
              monthly: "UGX 120,000",
              comparison: "UGX 500,000 – 1M/month",
              equivalent: "UGX 182,500/month"
            },
            USD: {
              setup: "$200",
              monthly: "$32",
              comparison: "$500 – $1,000/month",
              equivalent: "$200/month"
            },
            CAD: {
              setup: "CA$250",
              monthly: "CA$40",
              comparison: "CA$650 – CA$1,300/month",
              equivalent: "CA$250/month"
            },
            AUD: {
              setup: "A$300",
              monthly: "A$48",
              comparison: "A$700 – A$1,400/month",
              equivalent: "A$300/month"
            },
            EUR: {
              setup: "€180",
              monthly: "€30",
              comparison: "€450 – €900/month",
              equivalent: "€180/month"
            },
          };
  
          const config = rates[currency] || rates.USD;
  
          setSetupPrice(config.setup);
          setMonthlyPrice(config.monthly);
          setComparisonText(config.comparison);
          setEquivalentMonthly(config.equivalent);
        })
        .catch((error) => {
          console.error("Error detecting location:", error);
          // Fallback to USD
          setSetupPrice("$200");
          setMonthlyPrice("$32");
          setComparisonText("$500 – $1,000/month");
          setEquivalentMonthly("$200/month");
        });
    }, []);

  return { setupPrice, monthlyPrice, comparisonText, equivalentMonthly,  };
};

export default useDynamicPricing;