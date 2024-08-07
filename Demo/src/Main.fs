module Main

open Feliz
open App
open Browser.Dom
open Fable.Core.JsInterop

importSideEffects "flatpickr/dist/themes/material_blue.css"
let root = ReactDOM.createRoot(document.getElementById "feliz-app")
root.render(Components.FlatpickrBasic())