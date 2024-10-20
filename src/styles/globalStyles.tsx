import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0;

    --ant-blue: #1677ff;
    --ant-purple: #722ed1;
    --ant-cyan: #13c2c2;
    --ant-green: #52c41a;
    --ant-magenta: #eb2f96;
    --ant-pink: #eb2f96;
    --ant-red: #f5222d;
    --ant-orange: #fa8c16;
    --ant-yellow: #fadb14;
    --ant-volcano: #fa541c;
    --ant-geekblue: #2f54eb;
    --ant-gold: #faad14;
    --ant-lime: #a0d911;
    --ant-color-primary: #1677ff;
    --ant-color-success: #52c41a;
    --ant-color-warning: #faad14;
    --ant-color-error: #ff4d4f;
    --ant-color-info: #1677ff;
    --ant-color-link: #1677ff;
    --ant-color-text-base: #000;
    --ant-color-bg-base: #fff;

    --ant-gray-1: #ffffff;
    --ant-gray-2: #fafafa;
    --ant-gray-3: #f5f5f5;
    --ant-gray-4: #f0f0f0;
    --ant-gray-5: #d9d9d9;
    --ant-gray-6: #bfbfbf;
    --ant-gray-7: #8c8c8c;
    --ant-gray-8: #595959;
    --ant-gray-9: #434343;
    --ant-gray-10: #262626;
    --ant-gray-11: #1f1f1f;
    --ant-gray-12: #141414;
    --ant-gray-13: #000000;

    --ant-blue-1: #e6f4ff;
    --ant-blue-2: #bae0ff;
    --ant-blue-3: #91caff;
    --ant-blue-4: #69b1ff;
    --ant-blue-5: #4096ff;
    --ant-blue-6: #1677ff;
    --ant-blue-7: #0958d9;
    --ant-blue-8: #003eb3;
    --ant-blue-9: #002c8c;
    --ant-blue-10: #001d66;

    --ant-purple-1: #f9f0ff;
    --ant-purple-2: #efdbff;
    --ant-purple-3: #d3adf7;
    --ant-purple-4: #b37feb;
    --ant-purple-5: #9254de;
    --ant-purple-6: #722ed1;
    --ant-purple-7: #531dab;
    --ant-purple-8: #391085;
    --ant-purple-9: #22075e;
    --ant-purple-10: #120338;

    --ant-cyan-1: #e6fffb;
    --ant-cyan-2: #b5f5ec;
    --ant-cyan-3: #87e8de;
    --ant-cyan-4: #5cdbd3;
    --ant-cyan-5: #36cfc9;
    --ant-cyan-6: #13c2c2;
    --ant-cyan-7: #08979c;
    --ant-cyan-8: #006d75;
    --ant-cyan-9: #00474f;
    --ant-cyan-10: #002329;

    --ant-green-1: #f6ffed;
    --ant-green-2: #d9f7be;
    --ant-green-3: #b7eb8f;
    --ant-green-4: #95de64;
    --ant-green-5: #73d13d;
    --ant-green-6: #52c41a;
    --ant-green-7: #389e0d;
    --ant-green-8: #237804;
    --ant-green-9: #135200;
    --ant-green-10: #092b00;

    --ant-magenta-1: #fff0f6;
    --ant-magenta-2: #ffd6e7;
    --ant-magenta-3: #ffadd2;
    --ant-magenta-4: #ff85c0;
    --ant-magenta-5: #f759ab;
    --ant-magenta-6: #eb2f96;
    --ant-magenta-7: #c41d7f;
    --ant-magenta-8: #9e1068;
    --ant-magenta-9: #780650;
    --ant-magenta-10: #520339;

    --ant-pink-1: #fff0f6;
    --ant-pink-2: #ffd6e7;
    --ant-pink-3: #ffadd2;
    --ant-pink-4: #ff85c0;
    --ant-pink-5: #f759ab;
    --ant-pink-6: #eb2f96;
    --ant-pink-7: #c41d7f;
    --ant-pink-8: #9e1068;
    --ant-pink-9: #780650;
    --ant-pink-10: #520339;

    --ant-red-1: #fff1f0;
    --ant-red-2: #ffccc7;
    --ant-red-3: #ffa39e;
    --ant-red-4: #ff7875;
    --ant-red-5: #ff4d4f;
    --ant-red-6: #f5222d;
    --ant-red-7: #cf1322;
    --ant-red-8: #a8071a;
    --ant-red-9: #820014;
    --ant-red-10: #5c0011;

    --ant-orange-1: #fff7e6;
    --ant-orange-2: #ffe7ba;
    --ant-orange-3: #ffd591;
    --ant-orange-4: #ffc069;
    --ant-orange-5: #ffa940;
    --ant-orange-6: #fa8c16;
    --ant-orange-7: #d46b08;
    --ant-orange-8: #ad4e00;
    --ant-orange-9: #873800;
    --ant-orange-10: #612500;

    --ant-yellow-1: #feffe6;
    --ant-yellow-2: #ffffb8;
    --ant-yellow-3: #fffb8f;
    --ant-yellow-4: #fff566;
    --ant-yellow-5: #ffec3d;
    --ant-yellow-6: #fadb14;
    --ant-yellow-7: #d4b106;
    --ant-yellow-8: #ad8b00;
    --ant-yellow-9: #876800;
    --ant-yellow-10: #614700;

    --ant-volcano-1: #fff2e8;
    --ant-volcano-2: #ffd8bf;
    --ant-volcano-3: #ffbb96;
    --ant-volcano-4: #ff9c6e;
    --ant-volcano-5: #ff7a45;
    --ant-volcano-6: #fa541c;
    --ant-volcano-7: #d4380d;
    --ant-volcano-8: #ad2102;
    --ant-volcano-9: #871400;
    --ant-volcano-10: #610b00;

    --ant-geekblue-1: #f0f5ff;
    --ant-geekblue-2: #d6e4ff;
    --ant-geekblue-3: #adc6ff;
    --ant-geekblue-4: #85a5ff;
    --ant-geekblue-5: #597ef7;
    --ant-geekblue-6: #2f54eb;
    --ant-geekblue-7: #1d39c4;
    --ant-geekblue-8: #10239e;
    --ant-geekblue-9: #061178;
    --ant-geekblue-10: #030852;

    --ant-gold-1: #fffbe6;
    --ant-gold-2: #fff1b8;
    --ant-gold-3: #ffe58f;
    --ant-gold-4: #ffd666;
    --ant-gold-5: #ffc53d;
    --ant-gold-6: #faad14;
    --ant-gold-7: #d48806;
    --ant-gold-8: #ad6800;
    --ant-gold-9: #874d00;
    --ant-gold-10: #613400;

    --ant-lime-1: #fcffe6;
    --ant-lime-2: #f4ffb8;
    --ant-lime-3: #eaff8f;
    --ant-lime-4: #d3f261;
    --ant-lime-5: #bae637;
    --ant-lime-6: #a0d911;
    --ant-lime-7: #7cb305;
    --ant-lime-8: #5b8c00;
    --ant-lime-9: #3f6600;
    --ant-lime-10: #254000;
  }
`;
