document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        once: false,
        mirror: true
    });

    const budgetInput = document.getElementById('budgetInput');
    const franchiseFeeElement = document.getElementById('franchiseFee');
    const softwareFeeElement = document.getElementById('softwareFee');
    const purchasingCostElement = document.getElementById('purchasingCost');
    const interiorCostElement = document.getElementById('interiorCost');
    const approxCostElement = document.getElementById('approxCost');

    const franchiseFee = 247800;
    const softwareFee = 50000;
    const purchasingCost = 1000;
    const interiorCost = 1200;

    const updateCosts = () => {
        const budget = parseInt(budgetInput.value) || 0;
        const totalPurchasingCost = purchasingCost * budget;
        const totalInteriorCost = interiorCost * budget;
        const approxCost = franchiseFee + softwareFee + totalPurchasingCost + totalInteriorCost;

        purchasingCostElement.textContent = `₹ ${totalPurchasingCost.toLocaleString()}`;
        interiorCostElement.textContent = `₹ ${totalInteriorCost.toLocaleString()}`;
        approxCostElement.textContent = `₹ ${approxCost.toLocaleString()}`;
    };

    budgetInput.addEventListener('input', updateCosts);
    updateCosts(); // Initial call to set default values
});
