import Article from './../pages/Article';
import Imags from './../pages/Imags';
import Gallery from './../pages/Gallery';
import About from './../pages/About';
import Contact from './../pages/Contact';
import InlineCss from './../pages/InlineCss';
import Props from './../pages/Props';
import Home from './../pages/Home';
import Spread from '../pages/Spread';
import Children from '../pages/Children';
import ConditionalRender from '../pages/ConditionalRender';
import RenderList from '../pages/RenderList';
import Key from '../pages/Key';
import EventHandler from '../pages/EventHandler';
import EventPropagation from '../pages/EventPropagation';
import PreventDefault from '../pages/PreventDefault';
import UseState from '../pages/UseState';
import RenderandCommit from '../pages/RenderandCommit';
import StateSnapshot from '../pages/StateSnapshot';
import Queueing from '../pages/Queueing';

// Define routes in JSON format
const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/order-list", name: "Article", component: Article },
	{ path: "/images", name: "Images", component: Imags },
	{ path: "/gallery", name: "Gallery", component: Gallery },
	{ path: "/inline-css", name: "InlineCss", component: InlineCss },
	{ path: "/props", name: "Props", component: Props },
	{ path: "/spread", name: "Spread", component: Spread },
	{ path: "/children", name: "Children", component: Children },
	{ path: "/conditional-render", name: "Conditional Render", component: ConditionalRender },
	{ path: "/render-list", name: "Render List", component: RenderList },
	{ path: "/key", name: "List Key", component: Key },
	{ path: "/event-handler", name: "Event Handler", component: EventHandler },
	{ path: "/event-propagation", name: "Event Propagation", component: EventPropagation },
	{ path: "/prevent-default", name: "Prevent Default", component: PreventDefault },
	{ path: "/use-state", name: "Use State", component: UseState },
	{ path: "/render-and-commit", name: "Render and Commit", component: RenderandCommit },
	{ path: "/state-and-snapshort", name: "State as a Snapshot", component: StateSnapshot },
	{ path: "/queueing", name: "Queueing", component: Queueing },
	{ path: "/about", name: "About", component: About },
	{ path: "/contact", name: "Contact", component: Contact },
];
export default routes;
  