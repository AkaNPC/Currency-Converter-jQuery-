$.ajax({
        type: "GET",
        url: "https://www.cbr-xml-daily.ru/daily_json.js",
        success: function (response) {
            let jsonObj = JSON.parse(response);

            $.each(jsonObj["Valute"], function (indexInArray, valueOfElement) {
                let nowValHtml = `<option value="` + indexInArray + `">` + indexInArray + `</option>`
                $("#valList").append(nowValHtml)
            });

            $('#countInput').keyup(function () {
                let nowVal = $("#valList").val()
                let nowValRate = jsonObj["Valute"][nowVal]["Value"]
                let countVal = $("#countInput").val()

                let nowResult = Math.round(nowValRate * countVal)
                $("#inputRub").val(nowResult)
            });

            $('#inputRub').keyup(function () {
                let nowVal = $("#valList").val()
                let nowValRate = jsonObj["Valute"][nowVal]["Value"]
                let countVal = $("#inputRub").val()

                let nowResult2 = Math.round(countVal / nowValRate)
                $("#countInput").val(nowResult2)
            });

            $('#btnReset').click(function () {
                let reset = ''
                $("#countInput").val(reset)
                $("#inputRub").val(reset)
            })

            $('#valList').click(function () {
                let nowVal = $("#valList").val()
                let nowValRate = jsonObj["Valute"][nowVal]["Value"]
                let countVal = $("#countInput").val()

                let nowResult = Math.round(nowValRate * countVal)
                $("#inputRub").val(nowResult)
            })
        }
    });

    $('#optionSelect').hide();