# 1. 持续集成 | 发布前检查的相关知识
- git Hooks 完成检查
- ESlint
- PhantomJS

# 2. 持续集成 | Git Hooks基本用法
```bash
mkdir git-demo
cd git-demo
touch README.md
git init
git add README.md
git commit -a -m "init"
cd .git/hooks
touch pre-commit
chmod +x pre-commit
```
- pre-commit
```bash
#!/usr/bin/env node
console.log('hello hooks');
let process=require("process");
process.exitCode=1;
```
   - pre-commit 就是git commit的时候执行的内容 
# 3. 持续集成 | ESLint基本用法
```bash
mkdir eslint-demo
npm init -y
npm install --save-dev eslint
npx eslint --init
```
- npx eslint --init 配置内容
```bash
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:
eslint-plugin-react@latest
✔ Would you like to install them now with npm? · No / Yes
```
- touch index.js
检查提交的文件
```bash
npx eslint index.js
```
eslint就是这么检查文件的

# 4. 持续集成 | ESLint API及其高级用法
- pre-commit 
```js
  await exec("git stash push -k");
  const results = await eslint.lintFiles(["index.js"]);
  await exec("git stash pop");
```
# 5. 持续集成 | 使用无头浏览器检查DOM
- 设置chrome
- https://developers.google.com/web/updates/2017/04/headless-chrome
```bash
alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
# 启动无头浏览器
chrome --headless
# 打印
chrome --headless --disable-gpu --dump-dom about:blank >tem.txt

```
```bash
mkdir headless-demo
cd headless-demo
npm init -y
npm install --save-dev puppeteer
```