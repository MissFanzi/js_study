// 立即执行函数，独立作用域，控制全局变量
;(function (doc, initTools, initCompute) {
    var oCalculator = doc.getElementsByClassName('J_calculator')[0],
        oResult = oCalculator.getElementsByClassName('result')[0],
        oInputs = oCalculator.getElementsByTagName('input'),
        oBtnGroup = oCalculator.getElementsByClassName('btn-group')[0];
        oBtnGroup.addEventListener('click', onBtnClick, false);
    
    // 初始化操作
    var init = function () {
        bindEvent();
    }
    
    function bindEvent() {
        oBtnGroup.addEventListener('click', onBtnClick, false);
    }

    // 输出结果
    function renderResult(result) {
        oResult.innerHTML = result;
    }

    // 按钮点击事件处理
    function onBtnClick(ev) {
        var tar = initTools.getTarget(ev),
            tagName = tar.tagName.toLowerCase();
        if (tagName === 'button') {
            var method = tar.getAttribute('data-method'),
                fVal = initTools.digitalize(oInputs[0].value),
                sVal = initTools.digitalize(oInputs[1].value);
            renderResult(initCompute[method](fVal, sVal));
        }
    }

    init();
})(document, initTools, initCompute)
