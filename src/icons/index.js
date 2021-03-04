import { App } from "vue";
import SvgIcon from "@/components/svg-Icon";

App.component("SvgIcon", SvgIcon);

const req = require.context('./svg',false,/\.svg$/);

