# Git 的使用

## Git 和远程代码库

&nbsp;&nbsp;&nbsp;&nbsp;如果需要本地管理代码库可以使用[Git](https://git-scm.com/)，它是一个分布式版本管理工具。如果还要远程代码库帮忙存储，就需要使用[GitHub](https://github.com)、[Gitee](https://gitee.com)、[GitLab](https://about.gitlab.com/)这样的远程代码管理网站，这些网站都是基于 Git 的，只是将你的代码帮你存储到远程服务器上。  
&nbsp;&nbsp;&nbsp;&nbsp;Git 的使用可以是 shell 命令行形式的，叫做 Git Bash，当然也可用图形化的 Git GUI，还有比较出名的是[SourceTree](https://www.sourcetreeapp.com/)。

## Git 的安装

只提一下需要注意的地方：

1. 首先进入[Git 官网下载页](https://git-scm.com/downloads)，选择好对应版本后点击下载会很慢，要考虑翻梯子！。
2. 安装不选 C 盘这个应该知道；在“Select Components”的最后一项是“每天都检查 Git 的更新”，这个注意一下，其他随意。
3. 在“Choosing the default editor used by Git”这一步，会选择默认编辑器，我电脑上有 NotePad++和 VSCode，我选择使用“VSCode”作为默认编辑器。
4. 在“Adjusting your PATH environment”这一步，会选择 PATH 环境，也就是 git 命令可以在哪里运行；第一个是只在 git bash 上运行，第二个是也能在 windows 相关的 shell 送给你运行，第三个是不止 git bash 和 windows 相关的 shell，在 UNIX 命令行上也可以；推荐选第二个。
5. 在“Configuring the line ending conversions”这一步，会选择文档末尾以什么格式结束，我使用的是第二个选项。因为前端会使用 MD5 这个东西，相同内容但不同的末尾格式生成的 MD5 是不一样的，一定要区分 LF 和 CRLF 两种末尾格式，所以最好统一以 Unix 系统为准（VSCode 的右下角也有这个，如果 Git 设置了，VSCode 可以不用设置），如果没这个困扰的可以不用管。

## 创建远程代码库

1. 点击“New repository”，Repository name 不需要加个性标记，因为 Repository name 始终与 Owner 关联。

2. Description 则是 Repository 的描述了，一般选 Public 开源项目，Private 是要收费的（Gitee 的私有代码库是免费的）。

3. gitignore 是“忽略文件”，可以配置不想 push 的文件，像\*.class、desktop.ini、.vscode 这样的无需 push 到远程代码库。

4. license 是“开源许可证”，有问号说明，根据你的需要选择。大多数选 MIT License。

5. README 是 Repository 里的项目的详细说明。

6. 点击“Create repository”就创建了新的 Repository。

7. Gitee 创建远程代码库跟以上步骤没什么区别，比较方便的是中文显示。

## 关联配置

1. Git 和 GitHub 之间的传输是通过 SSH 加密传输的，所以我们要先在 Git 生成 ssh key，再把这个 ssh key 设置到 GitHub。

2. 首先打开 Git Bash（没有就先安装[Git](https://git-scm.com/)到本地），输入 **ssh-keygen -t rsa -C "邮箱名"** ，双引号里的内容是你 GitHub 的注册邮箱，输入后一直回车，直至出现虚线框。

3. 去 **C:\Users\用户名\\.ssh** 目录下查找 **id_rsa.pub** 文件，用 txt 打开再复制里面的所有内容。

4. 去 GitHub 网站，右上角的账户里有 Settings，点击打开选择 **SSH and GPG keys**，再点击 **New SSH key**，Title 随便填，Key 则是上一步复制的所有内容，最后生成。

5. 再回到 Git Bash，输入 **ssh -T git@github.com** 检查是否成功，第一次设置会遇到什么什么（yes/no）？直接输入 yes 回车，就可以看到授权成功了。

6. 设置 Git 的提交用户名和邮箱，输入 **git config --global user.name "代码提交人昵称"** 和 **git config --global user.email "提交邮箱名"**

## 关联本地和远程的代码库

1. 首先进入 GitHub 网站，点击想要关联的 Repository，点击 Clone or download，拿到远程代码库的 git 地址（可以是 ssh 也可以是 http）。

2. 如果本地没有项目，可以使用 **git clone git 地址** 将远程代码库克隆到本地。

3. 如果本地有项目，而远程是空项目。可以使用 **git remote add origin git 地址** 将本地与远程代码库关联起来。前提示这个本地项目是已经用 **git init** 进行初始化了。

## 代码提交、拉取、推送

1. **暂存**：修改文件后，可以将这些修改后的文件暂存到缓存区，过会准备提交到本地代码库里，使用 **git add 文件名** 将其暂存。提交所有修改就用 **git add .**

2. **提交**：修改的文件被暂存后就可以进行提交了，使用 **git commit -m "提交备注"** 将它们提交到本地代码库。

3. **撤销**：如果修改有问题想反悔，可以用 git reset --hard HEAD^ 一个^代表上个版本，两个^代表上上个，一百个就是 HEAD~100。

4. **查看状态**：**git status** 查看状态，**git log** 查看提交记录，**git reflog** 查看命令历史（查 commit id），可以把 **git reset --hard HEAD^** 中的 HEAD^替换为 commit id 来回退。

5. **拉取代码**： 从远程代码库拉取最新代码到本地代码库，可以使用 **git pull**。新代码与之前本地代码有冲突的话，就要 **git difftool** 查看冲突，解决完冲突才能进行下一步推送。拉取 master 分支的内容到此分支 **git pull origin master**

6. **推送代码**：版本修改完毕要推送到远程代码库上，**git push -u origin master** 是第一次推送，后面再推送不需要-u，即 **git push origin master**，如果你不是 master 分支就 **git push origin 分支名**。

7. **有修改但想先拉取代码**：先 **git stash** 将修改缓存，然后 **git pull** 拉取新代码，最后 **git stash pop** 缓存还原。[参考 1](https://blog.csdn.net/u014536527/article/details/83069636)，[参考 2](https://blog.csdn.net/fan12389/article/details/105378887)。

8. 退出一些显示信息，按 q。

## 分支管理

1. 列出所有分支：**git branch**，查看远程的是 **git branch -a**

2. 创建分支 xxx：**git branch xxx**

3. 将当前分支切换到分支 xxx：**git checkout xxx**

4. 基于当前的分支来创建新分支 xxx 并切换到这个新分支：**git checkout -b xxx**

5. 基于远程分支 xxxx 来创建新分支 xx 并切换到这个新分支：**git checkout -b xx origin/xxxx**

6. 将分支 xxx 合并到当前分支：**git merge origin/xxx**，不合远程的就去掉“origin/”

7. 删除分支 e：**git branch -d e**，删除不了就强制删除 **git branch -D e**

8. 查看哪些分支合并入当前分支：**git branch –merged**

9. 查看哪些分支未合并入当前分支：**git branch –no-merged**

10. 更新远程库到本地：**git fetch origin**

## 查看冲突

&nbsp;&nbsp;&nbsp;&nbsp;其实像 VSCode 编辑器自带的冲突显示已经够了，当然也可以配合使用 Beyond Compare 来查看冲突代码
&nbsp;&nbsp;&nbsp;&nbsp;在 C:\Users\用户名下的.gitconfig 文件中添加以下文本

```txt
[diff]
    tool = bc4
[difftool]
    prompt = false
[difftool "bc4"]
    cmd = "\"D:/Beyond Compare 4/BCompare.exe\" \"$LOCAL\" \"$REMOTE\""
[merge]
    tool = bc
[mergetool]
    prompt = false
[mergetool "bc4"]
    cmd = "\"D:/Beyond Compare 4/BCompare.exe\" \"$LOCAL\" \"$REMOTE\" \"$BASE\" \"$MERGED\""
```

## 报错信息

1. push 时报 **fatal: unable to access...** 错，可以试一下 git config --global http.proxy 和 git config --global --unset http.proxy
2. **文件 404 问题**：Git 是默认忽略大小写问题的，修改文件夹的大小写上传到 Git 远程代码库，将这个远程代码库的 build 部分部署到服务器上，在访问修改文件夹下的文件时会出现 404 问题。**解决方案：打开本地项目的.git 目录下的 config 文件，修改里面的 ignorecase 选项为 false。**
3. git detached HEAD：出现“HEAD detached from 072a7ee”，可以先创建一个新分支保存这个游离的版本 **git branch xxx 072a7ee** ，然后切回到原分支（这里是切回 master） **git checkout master** ，最后合并 xxx 和原分支 **git merge xxx**（将 xxx 合并到当前分支）。
4. `Failed to connect to github.com port 443: Timed out`问题，为了让连接 GitHub 稳定，在本地使用了 v2rayN。在项目命令行里输入`git config --global http.proxy http://127.0.0.1:10809`和`git config --global https.proxy http://127.0.0.1:10808`来配置 Git 的代理。（如果是 shadowsocks，端口号应该是 1080，自己打开 shadowsocks 查看即可）（如果想取消 Git 代理，`git config --global --unset http.proxy`和`git config --global --unset https.proxy`）
