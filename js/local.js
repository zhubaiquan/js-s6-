// 在当前目录新建一个Git代码库
// git init
// 新建一个目录,将其初始化为Git代码库
// git init [project-name]
// 下载一个项目和它的整个代码历史
// git clone [url]

// 配置
// Git 的设置文件 .gitconfig, 它可以在用户主目录下(全局配置),也可以在项目目录下(项目配置).
// 显示当前的Git 配置
// git config --list
// 编辑Git配置文件
// git config -e [--global]
// 设置提交代码时的用户信息
// git config [--global] user.name "[name]"
// git config [--global] user.email "[email address]"


// 增加/删除 文件
// 添加指定文件到暂存区
// git add [file1] [file2]
// 添加指定目录到暂存区,包括子目录
// git add [dir]
// 添加当前目录的所有文件到暂存区
// git add .
// 添加每个变化前,都会要求确认
// 对于同一文件的多处变化,可以实现分次提交
// git add -p
// 删除工作区文件,并且将这次删除放入暂存区
// git rm [file1] [file2]
// 停止追踪指定问文件,但该文件保留在工作区
// git rm --cached [file]
// 改名文件,并且将这个改名放暂存区
// git mv [file-original] [file-renamed]

// 代码提交
// 提交暂存区到仓库区
// git commit -m [message]
// 提交暂存区的指定文件到仓库区
// git commit [file1] [file2] ... -m [message]
// 提交工作区自上次commit之后的变化,直接到仓库区 
// git commit -a
// 提交时显示所有diff 信息
// git commit -v
// 使用一次新的commit,代替上一次提交
// 如果代码没有任何新的变化,则用来改写上一次commit的提交信息
// git commit --amend -m [message]
