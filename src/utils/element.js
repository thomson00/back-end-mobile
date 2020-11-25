import Vue from 'vue';
import {
    Input,
    Row,
    Col,
    Container,
    Header,
    Main,
    Checkbox,
    CheckboxGroup,
    Icon,
    Collapse,
    CollapseItem,
    TimePicker,
    DatePicker,
    TimeSelect,
    Button,
    Select,
    Option,
    Form,
    FormItem,
    Popover,
    Radio,
    RadioGroup,
    Tooltip,
    Pagination,
    Steps,
    Step,
    Aside,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Upload,
    Progress,
    Message,
    Menu,
    MenuItem,
    Submenu,
    Switch,
    Cascader,
    Timeline,
    TimelineItem,
    Drawer
} from 'element-ui';

Vue.use(Input)
    .use(Radio)
    .use(RadioGroup)
    .use(Row)
    .use(Col)
    .use(Container)
    .use(Header)
    .use(Main)
    .use(Aside)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Icon)
    .use(Collapse)
    .use(CollapseItem)
    .use(Button)
    .use(DatePicker)
    .use(Select)
    .use(Option)
    .use(Form)
    .use(FormItem)
    .use(TimePicker)
    .use(Popover)
    .use(TimeSelect)
    .use(Tooltip)
    .use(Steps)
    .use(Step)
    .use(Submenu)
    .use(Drawer)
    .use(Pagination)
    .use(Dropdown)
    .use(DropdownItem)
    .use(DropdownMenu)
    .use(Upload)
    .use(Progress)
    .use(Menu)
    .use(MenuItem)
    .use(Switch)
    .use(Cascader)
    .use(Timeline)
    .use(TimelineItem)
    .use(Drawer);
Vue.prototype.$message = Message;
