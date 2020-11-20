//将文件添加到暂存区
// git add .

// git remote 命令列出所有远程主机
// git remote -v 参看远程主机
// 所使用的远程主机自动被Git命名为origin。如果想用其他的主机名，需要用git clone命令的-o选项指定。
// git clone -o jQuery https://github.com/jquery/jquery.git
// git remote
// jQuery

// git remote show <主机名> 命令加上主机名，可以查看该主机的详细信息。
// git remote add <主机名> <网址> 命令用于添加远程主机
// git remote rm <主机名> 命令用于删除远程主机。
// git remote rename <原主机名> <新主机名>命令用于远程主机的改名。

// 一旦远程主机的版本库有了更新 需要将这些更新取回本地 这时需要用到 git fetch命令
// git fetch <远程主机名>
//git fetch命令通常用来查看其他人的进程，因为它取回的代码对你本地的开发代码没有影响。

//  如果只想取回特定分支的更新，可以指定分支名。
// git fetch <远程主机名> <分支名>  git fetch取回所有分支（branch）的更新。

//所取回的更新，在本地主机上要用"远程主机名/分支名"的形式读取。比如origin主机的master，就要用origin/master读取。

// git branch命令的-r选项，可以用来查看远程分支，-a选项查看所有分支。

// git branch -r
// origin/master
// git branch -a
// * master
// remotes/origin/master

//git checkout -b newBrach origin/master
//使用git checkout命令创建一个新的分支。

//git merge命令或者git rebase命令，在本地分支上合并远程分支。
//git merge origin/master
//或者
//git rebase origin/master

//git pull 命令的作用是，取回远程主机某个分支的更新，再与本地的指定分支合并。它的完整格式稍稍有点复杂。
//git pull <远程主机名> <远程分支名>:<本地分支名>

//origin主机的next分支，与本地的master分支合并，需要写成下面这样
//  git pull origin next:master
//远程分支是与当前分支合并，则冒号后面的部分可以省略。
// git pull origin next

//上面命令表示，取回origin/next分支，再与当前分支合并。实质上，这等同于先做git fetch，再做git merge。
//git fetch origin
//git merge origin/next

//Git会自动在本地分支与远程分支之间，建立一种追踪关系（tracking）。比如，在git clone的时候，所有本地分支默认与远程主机的同名分支，建立追踪关系，也就是说，本地的master分支自动"追踪"origin/master分支。


//Git会自动在本地分支与远程分支之间，建立一种追踪关系（tracking）。比如，在git clone的时候，所有本地分支默认与远程主机的同名分支，建立追踪关系，也就是说，本地的master分支自动"追踪"origin/master分支。
//git branch --set-upstream master origin/next      Git也允许手动建立追踪关系。

//如果当前分支只有一个追踪分支，连远程主机名都可以省略。
//git pull

// 如果合并需要rebase模式 可以使用 --rebase 选项
// git pull --rebase <远程主机名> <远程分支名>:<本地分支名>

// 如果远程主机删除了某个分支 默认情况下给git pull 不会在拉取远程分支的时候,删除对应的本地分支。这是为了防止，由于其他人操作了远程主机，导致git pull不知不觉删除了本地分支

// 你可以改变这个行为，加上参数 -p 就会在本地删除远程已经删除的分支。
// git pull -p
// # 等同于下面的命令
// git fetch --prune origin 
// git fetch -p

// git push 命令用于将本地分支的更新 他推送到远程主机 .他的格式与git pull 命令相仿

// git push <远程主机名> <本地分支名>:<远程分支名>
// 分支推送顺序的写法是<来源地>:<目的地>，所以git pull是<远程分支>:<本地分支>，而git push是<本地分支>:<远程分支>。
// 来源地 到 目的地

// 本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建。
// git push origin master

// 表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建。
// 上面命令表示，将本地的master分支推送到origin主机的master分支。如果后者不存在，则会被新建。


// 如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支。
// git push origin :master 
// 等同于
// git push origin --delete master

// 上面命令表示删除origin主机的master分支。
// 如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略。
// git push origin
// 上面命令表示，将当前分支推送到origin主机的对应分支。
// 如果当前分支只有一个追踪分支，那么主机名都可以省略。
// git push
// 如果当前分支与多个主机存在追踪关系，则可以使用-u选项指定一个默认主机，这样后面就可以不加任何参数使用git push。
// git push -u origin master

// 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。

// git push，默认只推送当前分支，这叫做simple方式
// 此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。如果要修改这个设置，可以采用git config命令。
// git config --global push.default matching
// 或者
// git config --global push.default simple

//还有一种情况，就是不管是否存在对应的远程分支，将本地的所有分支都推送到远程主机，这时需要使用--all选项。
//如果远程主机的版本比本地版本更新，推送时Git会报错，要求先在本地做git pull合并差异，然后再推送到远程主机。这时，如果你一定要推送，可以使用--force选项。

// 上面命令使用--force选项，结果导致远程主机上更新的版本被覆盖。除非你很确定要这样做，否则应该尽量避免使用--force选项。
// 最后，git push不会推送标签（tag），除非使用--tags选项
// git push origin --tags