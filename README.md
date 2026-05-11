<div align="center">

# 🏙️ City Compare
本项目基于Zipland City Compare项目，对比不同城市的生活成本，新增澳大利亚-悉尼，并使用AUD结算，各项中位数我参考了我的花销注入到database中。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Next.js](https://img.shields.io/badge/Next.js-13.5-black)](https://nextjs.org/) [![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38b2ac)](https://tailwindcss.com/) [![Deploy: Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://citycompare.zippland.com/)

**在不同城市，相同生活水平需要多少薪资？Offer 选择 & 城市生活成本对比工具**

</div>

## 📌 项目简介

**City Compare** 是一个帮助用户评估不同城市间薪资价值的工具。通过比较各城市的生活成本，它能够计算出在不同城市中保持相同生活水平所需的薪资。

无论你是正在考虑工作调动、多地域 Offer 选择，或是简单好奇不同城市的生活成本差异，这个工具都能提供直观的数据对比。

## ✨ 核心功能

- **多城市对比**：快速比较多个城市的生活成本和所需薪资
- **自定义生活方式**：调整住房、餐饮、交通、教育等各项参数
- **详细财务分析**：查看月度收支详情、税前税后工资、社保公积金和各项支出
- **可视化结果**：直观展示城市间的薪资和生活成本差异
- **响应式设计**：在手机、平板和桌面设备上都有良好体验

## 🛠️ 技术栈

- **前端框架**: [Next.js](https://nextjs.org/)
- **UI 设计**: [TailwindCSS](https://tailwindcss.com/)
- **数据可视化**: [Chart.js](https://www.chartjs.org/)
- **部署平台**: [Vercel](https://vercel.com/)
- **数据来源**: [Numbeo](https://www.numbeo.com/common/)

## 🚀 快速开始


### 本地运行

```bash
# 克隆仓库
git clone https://github.com/Zippland/city_compare.git

# 进入项目目录
cd city_compare

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

启动后访问 `http://localhost:3000` 即可查看应用。

## <a id="添加新城市数据"></a>📊 添加新城市数据

本项目欢迎贡献新的城市数据。按照以下步骤可以添加你所在城市或了解的城市数据：

### 1. 准备城市数据

城市数据存储在 `public/city_data.csv` 文件中，需要收集以下信息：

- 基本生活成本 (餐饮、交通、住房等)
- 工资和税收信息 (社保基数等)
- 教育、医疗等其他生活成本

注：以上数据均可参考 [Numbeo](https://www.numbeo.com/common/)

### 2. 添加数据的步骤

1. **Fork 此仓库**到你的 GitHub 账户

2. **Clone 你的 Fork 到本地**
   ```bash
   git clone https://github.com/YOUR-USERNAME/city_compare.git
   ```

3. **创建新分支**
   ```bash
   git checkout -b add-city-data/城市名称
   ```

4. **编辑CSV数据文件**

   打开 `public/city_data.csv` 文件，按照现有格式添加新城市数据。CSV文件的每一行代表一个城市，每列数据的含义如下：

   ```
   city,social_security_base_min,social_security_base_max,dining_home,dining_out,transport_public,transport_car,rent_center_1b,rent_center_3b,rent_suburb_1b,rent_suburb_3b,house_price_center,house_price_suburb,kindergarten,primary,middle,high,international,meal_cheap,meal_mid,utilities,mobile_plan,internet,fitness,cinema
   ```

   列字段说明：
   - `city`: 城市名称
   - `social_security_base_min`: 社保基数下限（元/月）
   - `social_security_base_max`: 社保基数上限（元/月）
   - `dining_home`: 在家就餐月均支出（元）
   - `dining_out`: 外出就餐月均支出（元）
   - `transport_public`: 公共交通月支出（元）
   - `transport_car`: 私家车月支出（元）
   - `rent_center_1b`: 市中心一居室租金（元/月）
   - `rent_center_3b`: 市中心三居室租金（元/月）
   - `rent_suburb_1b`: 郊区一居室租金（元/月）
   - `rent_suburb_3b`: 郊区三居室租金（元/月）
   - `house_price_center`: 市中心房价（元/平方米）
   - `house_price_suburb`: 郊区房价（元/平方米）
   - `kindergarten`: 幼儿园月费用（元）
   - `primary`: 小学月费用（元）
   - `middle`: 初中月费用（元）
   - `high`: 高中月费用（元）
   - `international`: 国际学校月费用（元）
   - `meal_cheap`: 便宜餐厅人均消费（元）
   - `meal_mid`: 中档餐厅人均消费（元）
   - `utilities`: 水电气月支出（元）
   - `mobile_plan`: 手机套餐费用（元/月）
   - `internet`: 宽带费用（元/月）
   - `fitness`: 健身费用（元/月）
   - `cinema`: 电影票价（元）

   添加一个新城市的示例：
   ```
   西安,2600,18000,1100,1700,150,1100,2000.00,4000.00,1200.00,2800.00,16000.00,9000.00,2500.00,3200,4000,4500,8000.00,20.0,150.0,300.00,70.00,85.00,200.00,40.0
   ```

5. **验证你的数据**

   启动本地服务器测试你添加的城市数据是否正常显示：
   ```bash
   npm run dev
   ```

6. **提交更改**
   ```bash
   git add public/city_data.csv
   git commit -m "添加城市: [城市名称] 数据"
   git push origin add-city-data/城市名称
   ```

7. **创建 Pull Request**
   - 前往你的 GitHub 仓库页面
   - 点击 "Compare & pull request" 按钮
   - 填写 PR 标题和描述，说明数据来源
   - 提交 PR

### 3. 数据来源要求

为确保数据质量，请遵循以下原则：

- 优先使用 [Numbeo](https://www.numbeo.com/) 等公开数据源
- 对于无法获取的数据，可使用当地政府发布的统计数据
- 如使用个人经验估算，请在 PR 描述中明确说明
- 提供数据来源链接或参考依据

## <a id="参与贡献"></a>🤝 参与贡献


## 📄 开源协议

本项目采用 [MIT 许可证](LICENSE)。
