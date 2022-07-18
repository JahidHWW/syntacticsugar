let SplitTip = 0;
let tip = 0;
let finalTotal = 0;
let finalTotalSplit = 0;

function show() {
    const peopleCount = document.getElementById('#people').value;
    const total = document.getElementById('$total').value;
    const serviceQuality = document.getElementById('service-quality').value;

    if (peopleCount === "" || total === "" || serviceQuality === 0) {
        window.alert("Please enter all values...");
        return;
    }

    var sfx = document.getElementById("sfx");
    sfx.autoplay = 'true';
    sfx.load();

    SplitTip = (+total * +serviceQuality) / +peopleCount;
    SplitTip = Math.round(SplitTip * 100) / 100;
    SplitTip = SplitTip.toFixed(2);
    let div = document.getElementById('splitTotal');
    div.innerText = "$ " + SplitTip;

    tip = +total * +serviceQuality;
    tip = Math.round(tip * 100) / 100;
    tip = tip.toFixed(2);
    let divTip = document.getElementById('tipTotal');
    divTip.innerText = "$ " + tip;

    finalTotal = +total + +tip;
    finalTotal = Math.round(finalTotal * 100) / 100;
    finalTotal = finalTotal.toFixed(2);
    let divTotal = document.getElementById('finalTotal');
    divTotal.innerText = "$ " + finalTotal;

    finalTotalSplit = +finalTotal / +peopleCount;
    finalTotalSplit = Math.round(finalTotalSplit * 100) / 100;
    finalTotalSplit = finalTotalSplit.toFixed(2);
    let divTotalSplit = document.getElementById('totalSplit');
    divTotalSplit.innerText = "$ " + finalTotalSplit;

    splitTotal.appendChild(div);
    tipTotal.appendChild(divTip);
    finalTotal.appendChild(divTotal);
    totalSplit.appendChild(divTotalSplit);
}