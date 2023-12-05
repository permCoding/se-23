const Color = Object.freeze(
    {
        RD: "red",
        BL: "blue",
        GR: "green"
    }
)

console.log(Color)
Color.id = 1
console.log(Color)
console.log(Color.BL === "blue")
Color.BL = "yellow"
console.log(Color)
