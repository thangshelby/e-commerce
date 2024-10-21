import {
  HomeOutlinedIcon,
  PeopleOutlinedIcon,
  ReceiptOutlinedIcon,
  Inventory2OutlinedIcon,
  MenuOutlinedIcon,
  MessageIcon,
} from "./icons";

export const createUserFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },

  {
    name: "email",
    label: "Email",
    type: "text",
    required: true,
  },
  {
    name: "phone",
    label: "Contact Number",
    type: "text",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
  {
    name: "repeat_password",
    label: "Repeat Password",
    type: "password",
    required: true,
  },

  {
    name: "birth",
    label: "Birth Date",
    type: "date",
    required: true,
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    required: true,
  },
];

export const createProductFields = [
  {
    name: "imageCover",
    label: "Ảnh bìa",
    type: "image",
    gridColumn: "col-span-2",
    required: true,
    children: [
      "Tải lên hình ảnh 1:1.",
      "Ảnh bìa sẽ được hiển thị tại các trang Kết quả tìm kiếm, Gợi ý hôm nay,... Việc sử dụng ảnh bìa đẹp sẽ thu hút thêm lượt truy cập vào sản phẩm của bạn",
    ],
  },
  {
    name: "image1",
    label: "Ảnh 1",
    type: "image",
    gridColumn: "col-span-2",
    required: false,
  },
  {
    name: "image2",
    label: "Ảnh 2",
    type: "image",
    gridColumn: "col-span-2",
    required: false,
  },
  {
    name: "image3",
    label: "Ảnh 3",
    type: "image",
    gridColumn: "col-span-2",
    required: false,
  },
  {
    name: "image4",
    label: "Ảnh 4",
    type: "image",
    gridColumn: "col-span-2",
    required: false,
  },  
  {
    name: "name",
    label: "Tên sản phẩm",
    type: "text",
    gridColumn: "span 4",
    required: true,
  },
  {
    name: "stock",
    label: "Số lượng sản phẩm",
    type: "text",
    gridColumn: "span 4",
    required: true,
  },
  {
    name: "priceSale",
    label: "Giá bán",
    type: "text",
    gridColumn: "span 2",
    required: true,
  },
  {
    name: "priceRent",
    label: "Giá thuê",
    type: "text",
    gridColumn: "span 2",
    required: true,
  },

 
  {
    name: "category",
    label: "Danh mục",
    type: "select",
    gridColumn: "col-span-2",
    required: true,
  },
  {
    name: "description",
    label: "Mô tả chi tiết",
    type: "text",
    gridColumn: "span 4",
    required: false,
  },
];

export const categoriess = [
  {
    title: "Computers",
    children: [
      { title: "Desktops" },
      { title: "Laptops" },
      { title: "Tablets" },
      { title: "Servers" },
      { title: "Workstations" },
    ],
  },
  {
    title: "Mobile Devices",
    children: [
      { title: "Smartphones" },
      { title: "Feature phones" },
      { title: "Smartwatches" },
      { title: "Fitness trackers" },
      { title: "E-readers" },
    ],
  },
  {
    title: "Audio Equipment",
    children: [
      { title: "Headphones" },
      { title: "Earbuds" },
      { title: "Speakers" },
      { title: "Soundbars" },
      { title: "Amplifiers" },
      { title: "Microphones" },
      { title: "Home theater systems" },
    ],
  },
  {
    title: "Video Equipment",
    children: [
      { title: "Televisions" },
      { title: "Projectors" },
      { title: "Digital cameras" },
      { title: "Camcorders" },
      { title: "Video streaming devices" },
      { title: "Monitors" },
    ],
  },
  {
    title: "Gaming Devices",
    children: [
      { title: "Gaming consoles" },
      { title: "Handheld gaming consoles" },
      { title: "Gaming PCs" },
      { title: "VR headsets" },
      { title: "Gaming accessories" },
    ],
  },
  {
    title: "Home Appliances",
    children: [
      { title: "Refrigerators" },
      { title: "Washing machines" },
      { title: "Dryers" },
      { title: "Ovens" },
      { title: "Microwaves" },
      { title: "Dishwashers" },
      { title: "Air conditioners" },
      { title: "Vacuum cleaners" },
    ],
  },
  {
    title: "Office Equipment",
    children: [
      { title: "Printers" },
      { title: "Scanners" },
      { title: "Fax machines" },
      { title: "Photocopiers" },
      { title: "Projectors" },
      { title: "Telephones" },
      { title: "Shredders" },
    ],
  },
  {
    title: "Networking Devices",
    children: [
      { title: "Routers" },
      { title: "Modems" },
      { title: "Switches" },
      { title: "Access points" },
      { title: "Network extenders" },
      { title: "Network-attached storage (NAS)" },
    ],
  },
  {
    title: "Personal Care Devices",
    children: [
      { title: "Electric toothbrushes" },
      { title: "Electric shavers" },
      { title: "Hair dryers" },
      { title: "Hair straighteners" },
      { title: "Massage devices" },
    ],
  },
  {
    title: "Medical Devices",
    children: [
      { title: "Digital thermometers" },
      { title: "Blood pressure monitors" },
      { title: "Glucose meters" },
      { title: "Pulse oximeters" },
      { title: "Hearing aids" },
    ],
  },
  {
    title: "Wearable Devices",
    children: [
      { title: "Smartwatches" },
      { title: "Fitness trackers" },
      { title: "Smart glasses" },
      { title: "Smart rings" },
    ],
  },
  {
    title: "Automotive Electronics",
    children: [
      { title: "Car audio systems" },
      { title: "GPS navigation systems" },
      { title: "Dash cameras" },
      { title: "Car alarms" },
      { title: "Electric vehicle chargers" },
    ],
  },
  {
    title: "Industrial Electronics",
    children: [
      { title: "Programmable logic controllers (PLCs)" },
      { title: "Industrial robots" },
      { title: "Variable frequency drives (VFDs)" },
      { title: "Sensors" },
      { title: "Industrial computers" },
    ],
  },
  {
    title: "Power Electronics",
    children: [
      { title: "Power supplies" },
      { title: "Inverters" },
      { title: "UPS (uninterruptible power supplies)" },
      { title: "Batteries" },
      { title: "Solar inverters" },
    ],
  },
  {
    title: "Communication Devices",
    children: [
      { title: "Smartphones" },
      { title: "Landline phones" },
      { title: "Two-way radios" },
      { title: "Walkie-talkies" },
      { title: "Satellite phones" },
    ],
  },
];

export const categories = [
  { title: "NHÓM TRANG PHỤC TRUYỀN THỐNG" },
  { title: "NHÓM TRANG PHỤC CÁCH TÂN" },
  { title: "PHỤ KIỆN ĐI KÈM" },
];

export const manageDashboard = [
  {
    title: "Trang chủ",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },

  {
    title: "Quản lý người dùng",
    icon: <PeopleOutlinedIcon />,
    // path: "/users",
    children: [
      { title: "Thêm người dùng", path: "/add-user" },
      { title: "Danh sách người dùng", path: "/list-user" },
    ],
  },
  {
    title: "Quản lý sản phẩm",
    icon: <Inventory2OutlinedIcon />,
    // path: "/products",
    children: [
      { title: "Thêm sản phẩm", path: "/add-product" },
      { title: "Danh sách sản phẩm", path: "/list-product" },
    ],
  },
  {
    title: "Quản lý danh mục",
    icon: <MenuOutlinedIcon />,
    children: [
      { title: "Thêm danh mục", path: "/add-category" },
      { title: "Danh sách danh mục", path: "/list-category" },
    ],
  },

  {
    title: "Quản lý đơn hàng",
    icon: <ReceiptOutlinedIcon />,
    // path:
    children: [{ title: "Danh sách đơn hàng", path: "/list-order" }],
  },
  {
    title: "Quản lý tin nhắn",
    icon: <MessageIcon />,
    children: [{ title: "Danh sách tin nhắn", path: "/message" }],
  },
];
