// main.js

// Function to add a new window
function addWindow() {
    var windowsContainer = document.getElementById('windowsContainer');
    var windowCount = windowsContainer.childElementCount + 1;

    var windowDiv = document.createElement('div');
    windowDiv.className = 'window row g-3';
    windowDiv.style.marginTop = 'auto';
    windowDiv.innerHTML = `
        <div class="col-md-3 form-section">
            <div class="form-floating">
                <input type="number" step="0.01" class="form-control" id="height${windowCount}" name="height${windowCount}" placeholder="Height" required>
                <label for="height${windowCount}">Height (mm)</label>
            </div>
        </div>
        <div class="col-md-3 form-section">
            <div class="form-floating">
                <input type="number" step="0.01" class="form-control" id="width${windowCount}" name="width${windowCount}" placeholder="Width" required>
                <label for="width${windowCount}">Width (mm)</label>
            </div>
        </div>
        <div class="col-md-3 form-section" style="align-content: end;">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="motorized${windowCount}" name="motorized${windowCount}">
                <label class="form-check-label" for="motorized${windowCount}">Motorized</label>
            </div>
        </div>
        <div class="col-md-3 form-section" style="align-content: end;">
            <button class="btn btn-primary rounded-pill" type="button" onclick="removeWindow(this)">Remove</button>
        </div>
    `;

    windowsContainer.appendChild(windowDiv);
}

// Function to remove a window
function removeWindow(button) {
    var windowDiv = button.parentElement.parentElement;
    windowDiv.remove();
}

// Function to calculate the cost
function calculateCost() {
    var windowsContainer = document.getElementById('windowsContainer');
    var windows = windowsContainer.getElementsByClassName('window');
    var totalCost = 0;
    var sqmPrice = 83;
    var motorizedExtra = 100;

    for (var i = 0; i < windows.length; i++) {
        var height = parseFloat(windows[i].querySelector(`[id^="height"]`).value);
        var width = parseFloat(windows[i].querySelector(`[id^="width"]`).value);
        var motorized = windows[i].querySelector(`[id^="motorized"]`).checked;

        if (isNaN(height) || isNaN(width)) {
            alert("Please enter valid dimensions for all windows.");
            return;
        }

        // Convert mm to meters (1 meter = 1000 mm)
        var heightInMeters = height / 1000;
        var widthInMeters = width / 1000;

        // Calculate area in square meters
        var area = heightInMeters * widthInMeters;

        // If less than 1 sqm, treat it as 1 sqm
        if (area < 1) {
            area = 1;
        }

        // Calculate the cost for the current window
        var cost = area * sqmPrice;

        // Add the motorized extra cost if applicable
        if (motorized) {
            cost += motorizedExtra;
        }

        totalCost += cost;
    }

    // Display the total cost
    var resultAmount = document.getElementById('resultAmount');
    resultAmount.querySelector('#totalAmount').textContent = totalCost.toFixed(2);

    // Hide the initial image and show the calculated amount
    var resultImage = document.getElementById('resultImage');
    resultImage.style.display = 'none';
    resultAmount.style.display = 'block';
}

// Add the first window when the page loads
window.onload = function() {
    addWindow(); // Add one initial window
};
