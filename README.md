[![Build status](https://ci.appveyor.com/api/projects/status/bks0h5ho3hj82c2w?svg=true)](https://ci.appveyor.com/project/DaveJohnson8080/feliz-reactflatpickr) [![NuGet](https://img.shields.io/nuget/v/Feliz.ReactFlatpickr.svg?style=flat-square)](https://www.nuget.org/packages/Feliz.ReactFlatpickr/)

# Feliz.ReactFlatpickr

Feliz/Fable bindings for [react-flatpickr](https://github.com/sanniassin/react-flatpickr)

## Installation

### npm

```npm install react-flatpickr```

```dotnet paket add Feliz.ReactFlatpickr --project <path to your proj>```

### femto

(From the target project folder)
```dotnet femto install Feliz.ReactFlatpickr```

## Contributing

This project uses `fake`, `paket`, and `femto` as .NET Core local tools. Therefore, run `dotnet tool restore` to restore the necessary CLI tools before doing anything else.

To run targets using Fake: `dotnet fake build -t TargetName`

### Regular maintenance

1. Run the `CiBuild` target to check that everything compiles
2. Commit and tag the commit (this is what triggers deployment from  AppVeyor). For consistency, the tag should be identical to the version (e.g. `1.2.3`).