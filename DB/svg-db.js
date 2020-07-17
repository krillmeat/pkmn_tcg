const svgData = {
    baseSvg:"version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 180 252' xml:space='preserve'",
    innerBorder: "<g class='INNER_BORDER'><path d='M0,0.42v251.67h179V0.42H0z M173,246.08H6.33v-240H173V246.08z'/></g>",
    outerBorder:"<g class='OUTER_BORDER'><path d='M0,0v252.25h179.5V0H0z M176.5,249.5H3.33V3.17H176.5V249.5z'/></g>",
    background:"<rect class='BACKGROUND' x='0.5' y='1.5' width='178' height='249'/>",
    bottomBar: "<rect class='BOTTOM_BAR' x='6.11' y='233' width='167.41' height='1.19'></rect>",
    setInfoBack: "<rect x='5.33' y='236.89' width='23.26' height='7'/>",
    topRect: "<rect class='TOP_RECT' x='1.67' y='0.42' width='177.33' height='22'/>",
    hpShapes: "<g class='HP_SHAPES'><polygon points='135,19 135,-2 166.5,-4.64 166.5,19'/><rect x='142.25' y='11.17' width='17.33' height='19'/><text transform='translate(146.5,26)' class='MINI_HP'>HP</text></g>",
    typeBars: {
        iconBlock: "",
        textBlock: ""
    },
    setIcons: {
        rg: "<circle cx='3.96' cy='3.92' r='0.97'/><g><path d='M5.7,4.67C5.41,5.34,4.75,5.81,3.96,5.81S2.51,5.34,2.23,4.67H1.39c0.32,1.12,1.35,1.93,2.58,1.93 c1.22,0,2.25-0.81,2.58-1.93C6.55,4.67,5.7,4.67,5.7,4.67z'/></g><path d='M2.52,3.93V3.92c0-0.8,0.65-1.45,1.45-1.45s1.45,0.65,1.45,1.45v0.01h1.23V3.92c0-1.47-1.2-2.68-2.68-2.68 S1.3,2.44,1.3,3.92v0.01C1.3,3.93,2.52,3.93,2.52,3.93z'/>",
        gs: "<g><path d='M3,6.3c0,0-0.3-0.6,0-1.1s0.7-0.9,0.5-1.3C3.3,3.4,3,3.2,3,3.2s0.1,0.5-0.3,1c0,0-0.2,0.2-0.2,0.6 c0,0-1-1.4,0.3-2.4c0,0,1.1,0.5,1.1,1.6c0,0,1.8-1.3,0.3-2.8c0,0-0.1,0.3-0.7,0.7C3.5,2,3.4,2.1,3.4,2.1S3,1.7,3.1,1.3 c0,0-1.8,0.6-1.9,2.3S3,6.3,3,6.3z'/><path d='M6.5,5c0,0-0.1-0.6-0.8-0.7c0,0,1.6-1.9-0.6-2.8c0,0,1,1.4-0.6,2.8l-0.1,0c0,0,0.1,0,0.1,0 c0.3,0,0.6,0.3,0.6,0.6c0,0.3-0.3,0.6-0.6,0.6C4.2,5.6,4,5.3,4,4.9C4,4.9,4,4.8,4,4.7C3.8,4.9,3.1,5.6,3.6,6.2 c0.6,0.7,1.7,0.5,2.3-0.1S6.5,5.3,6.5,5z'/></g>",
        rs: "<g><polygon points='1.9,5.3 2.7,4.8 2.7,3.2 1.9,2.8'/><polygon points='2.9,2.9 3.6,2.5 3.6,1.6 2.1,2.5'/><polygon points='3.6,5.6 2.9,5.2 2.1,5.6 3.6,6.5'/><polygon points='4.8,5.2 4,5.6 4,6.5 5.5,5.6'/><polygon points='3.1,3.2 3.1,4.9 3.8,5.3 4.6,4.9 4.6,3.2 3.8,2.8'/><polygon points='5.5,4.6 4.9,3.5 4.9,4.8 5.7,5.3 5.7,4.2'/><polygon points='4.9,2.1 4,1.6 4,2.5 4.1,2.5'/></g><g><polygon points='5.9,2.4 6.6,2.8 5.9,3.2 5.5,3.9 5.1,3.2 4.4,2.8 5.1,2.4 5.5,1.6'/></g>"
    },
    typeIcons: {
        grass: "<path d='M6.08,1.51c0,0-3.15-0.15-4.21,1.35s0.15,2.85,0.15,2.85l0.53-0.55V3.24l0.51,1.4l0.67-0.71L3.6,2.49 l0.52,1.03l1.06-1.11L4.37,3.73L5.4,3.99L4.04,4.26l-0.49,0.8l1.4,0.28L3.21,5.61L2.78,6.32c0,0,2.25,0.6,3-0.9 S6.08,1.51,6.08,1.51z'/>",
        fire: "",
        Water: "",
        electric: "",
        psychic: "",
        fighting: "",
        rock: "",
        ground: "",
        poison: "<path d='M6.7,3.5c0-1.3-1.2-2.3-2.8-2.3s-2.8,1-2.8,2.3c0,0.7,0.4,1.4,1,1.8C2.1,5.5,2,5.7,2,5.9 c0,0.4,0.3,0.7,0.7,0.7c0.3,0,0.5-0.2,0.6-0.5C3.4,6.4,3.7,6.6,4,6.6c0.3,0,0.5-0.2,0.6-0.4c0.1,0.2,0.4,0.4,0.6,0.4 c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.2-0.5C6.3,4.9,6.7,4.3,6.7,3.5z M4,4.7c-0.9,0-1.5-0.5-1.5-1.2S3.1,2.4,4,2.4 s1.5,0.5,1.5,1.2S4.8,4.7,4,4.7z'/>",
        bug: "",
        ice: "",
        ghost: "",
        flying: "",
        dragon: "",
        dark: "",
        steel: "",
        fairy: "",
        normal: ""
    }
}

const TOP_CONTENT_OFFSET = "6,4";

const TOP_TYPE_SCALE = 2.25;
const TOP_TYPE_TWO_OFFSET = "15,0";

const NAME_SINGLE_TYPE_OFFSET = "20,13.5";
const NAME_DUAL_TYPE_OFFSET = "36,13.5";

const HP_OFFSET_DOUBLE_DIGIT = "142.5,14";
const HP_OFFSET_TRIPLE_DIGIT = "139.5,14";

const STAGE_OFFSET = "0,25.5";
const STAGE_MOD_OFFSET = 0;
const STAGE_SHAPE_WARP = {
    basic: 20,
    stage1: 26,
    stage2: 26,
    mega: 18,
    gmax: 20,
    baby: 18
};
const STAGE_MAIN_TEXT_OFFSET = "30,6.5";

const TYPE_BARS_OFFSET = "24.5,36";
const TYPE_BAR_ONE_OFFSET = "0,0";
const TYPE_BAR_ICON_POLYGON = "<polygon points='4.48,0.51 18.55,0.51 14.55,7.51 0.51,7.51'/>";
const TYPE_BAR_ICON_OFFSET = "5.5,0";
const TYPE_BAR_TEXT_OFFSET = "22,6";