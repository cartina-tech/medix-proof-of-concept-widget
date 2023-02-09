import ColorBox from "./ColorBox";
interface IPaletteColors {
  title: string;
  color: string;
}

export const paletteColors: IPaletteColors[] = [
  {
    title: "röd",
    color: "#FF0000",
  },
  {
    title: "orange",
    color: "#FF6600",
  },
  {
    title: "guld",
    color: "#FFCC66",
  },
  {
    title: "gul",
    color: "#FFFF00",
  },
  {
    title: "beige",
    color: "#FFFFCC",
  },
  {
    title: "ljusgrön",
    color: "#33FF66",
  },
  {
    title: "grön",
    color: "#339900",
  },
  {
    title: "mörkgrön",
    color: "#336600",
  },
  {
    title: "brun",
    color: "#996633",
  },
  {
    title: "ljusblå",
    color: "#6699FF",
  },
  {
    title: "blå",
    color: "#0000FF",
  },
  {
    title: "mörkblå",
    color: "#000099",
  },
  {
    title: "lila",
    color: "#6633CC",
  },
  {
    title: "rosa",
    color: "#FF33FF",
  },
  {
    title: "grå",
    color: "#999999",
  },
  {
    title: "svart",
    color: "#000000",
  },
  {
    title: "vinröd",
    color: "#990033",
  },
  {
    title: "turkos",
    color: "#66CCFF",
  },
  {
    title: "vit",
    color: "#FFFFFF",
  },
  {
    title: "ljusbrun",
    color: "#d2a679",
  },
  {
    title: "mörkbrun",
    color: "#86592d",
  },
  {
    title: "neongul",
    color: "#ccff99",
  },
  {
    title: "ljuslila",
    color: "#cc99ff",
  },
  {
    title: "brons",
    color: "#cc6600",
  },
  {
    title: "mörklila",
    color: "#8000ff",
  },
  {
    title: "ljusrosa",
    color: "#ffccff",
  },
  {
    title: "silver",
    color: "#CCCCCC",
  },
  {
    title: "mörkrosa",
    color: "#cc00cc",
  },
];

const ColorPalette = () => {
  return (
    <div className='colorPalette' id='colorPalette'>
      {paletteColors.map((c, index) => {
        const { title, color } = c;
        return (
          <ColorBox
            key={`color_${index + 1}`}
            onClick={() => {
              console.log("clicked color", title);
            }}
            title={title}
            color={color}
            id={`color_${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export default ColorPalette;
