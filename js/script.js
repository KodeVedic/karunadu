document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        once: false,
        mirror: true
    });

    const budgetInput = document.getElementById('budgetInput');
    const calculateButton = document.getElementById('calculateButton');
    const franchiseFeeElement = document.getElementById('franchiseFee');
    const softwareFeeElement = document.getElementById('softwareFee');
    const purchasingCostElement = document.getElementById('purchasingCost');
    const interiorCostElement = document.getElementById('interiorCost');
    const approxCostElement = document.getElementById('approxCost');

    const franchiseFee = 247800;
    const softwareFee = 50000;
    const purchasingCostPerSqft = 1000;
    const interiorCostPerSqft = 1200;

    const updateCosts = () => {
        const budget = parseInt(budgetInput.value, 10);
        
        if (isNaN(budget) || budget <= 0) {
            alert("Please enter a valid size of area in sqft.");
            return;
        }

        const totalPurchasingCost = purchasingCostPerSqft * budget;
        const totalInteriorCost = interiorCostPerSqft * budget;
        const approxCost = franchiseFee + softwareFee + totalPurchasingCost + totalInteriorCost;

        purchasingCostElement.textContent = `₹ ${totalPurchasingCost.toLocaleString()}`;
        interiorCostElement.textContent = `₹ ${totalInteriorCost.toLocaleString()}`;
        approxCostElement.textContent = `₹ ${approxCost.toLocaleString()}`;
    };

    calculateButton.addEventListener('click', updateCosts);
});
