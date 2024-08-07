namespace App

open Feliz

type Components =
    [<ReactComponent>]
    static member FlatpickrBasic() =
        Html.div [
            Html.h1 [ Html.text "Flatpickr with time." ]
            Flatpickr.Flatpickr [
                flatpickr.enableTime()
                prop.value System.DateTime.Now
            ]
            Html.h1 [ Html.text "Flatpickr without time." ]
            Flatpickr.Flatpickr [
                prop.value System.DateTime.Now
            ]
            Html.h1 [ Html.text "Flatpickr with time only." ]
            Flatpickr.Flatpickr [
                prop.value System.DateTime.Now
                flatpickr.enableTime()
                flatpickr.options {| dateFormat = "H:i"; noCalendar = true; time_24hr = true |}
            ]
        ]