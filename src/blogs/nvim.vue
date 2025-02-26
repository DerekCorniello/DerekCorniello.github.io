<template>
    <BaseBlog title="My Transition from VSC*de to NeoVim">
                    <div class="divider-container">
                        <div class="divider-line"></div>
                        <div class="divider-glow"></div>
                    </div>
                    <p><i>My experience with transitioning from VSC*de to NeoVim. This includes setting up NeoVim,
                            lazy.nvim, Mason, and other plugins that help my development cycle. Thank you to
                            <a href="https://www.youtube.com/c/theprimeagen">ThePrimeagen</a> for providing guides to
                            help me through this!</i></p>
                    <div class="divider-container">
                      <div class="divider-line"></div>
                      <div class="divider-glow"></div>
                    </div>
                    <div style="text-align: left;">
                        It was a normal day at my office job, code upon code, bugfix upon bugfix. I finally had some
                        time to sit and relax, as I was going to watch a demo from one of my coworkers. He was
                        demonstrating some tooling that he had created for our internal systems. As I hopped into our
                        virtual teams meeting and talked with sonme coworkers, awaiting the arrival of the demo, I was
                        met with the Vim editor.
                        <br><br>
                        <i>Yuck, why would anyone want to use <b>that</b>?</i> I thought to myself. <i>It is so bare, so
                            minimalistic. I'll just keep using what I have, no way that is better than my VSC*de
                            Editor.</i>
                        <br><br>
                        Little did I know, I would be sitting here, using NeoVim myself, writing this article, a few
                        months later. Now, here's the short journey of how I migrated from VSC*de to NeoVim.
                        <br><br><br>
                        <div style="text-align: center; font-size: 1.5rem;"><strong><u>My introduction to Vim</u></strong></div>
                        <div class="divider-container">
                            <div class="divider-line"></div>
                            <div class="divider-glow"></div>
                        </div>
                        In a course a few years ago in college, I was sitting in lecture and watching a live code
                        demonstration, I was intrigued on how quickly the professor was able to move around the editor.
                        He was using VSC*de though, so I was confused to say the least. <i>Maybe he's just a fast
                            typer</i> I thought.
                        <br><br>
                        I was astonished watching him program, and one day I realized that he was not an incredibly
                        fast, 200 WPS typer. Through the little I actually watched him type, and watching the screen
                        change inside the editor, I was astonished as to how he was getting it done so quickly. I knew
                        he
                        wasn't using anything different in terms of hardware, so it <b>must</b> be some sort of plugin.
                        I went to his office one evening, and asked about it.
                        <br><br>
                        <i>It's Vim motions</i>, he said. Vim? Motions? What is he talking about? Then he told me about
                        Vi, the editor, and Vim, its successor. Once more, I was thoroughly confused. Why learn a whole
                        new way to type when I have been using the same one for years? <i>It's different, you have to
                            get a feel for it, but then it moves mountains in terms of productivity. You've seen me use
                            it in class</i>. Hmmm... It is intriguing...
                        <br><br><br>
                        <div style="text-align: center; font-size: 1.5rem;"><strong><u>Going Through the (Vim) Motions</u></strong></div>
                        <div class="divider-container">
                            <div class="divider-line"></div>
                            <div class="divider-glow"></div>
                        </div>
                        By now I have heard about "learning the motions is 90% of the battle". So I did what had to be
                        done then, I installed the <a
                            href="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim">Vim plugin for
                            VSC*de</a>. Striving for that quickness and efficiency I saw with my professor before, I set
                        out to learn Vim motions. I think for most, the hardest part is starting. Seeing that "HJKL"
                        move you around comes to a shock for most. It is <i>terribly</i> different than a standard text
                        editor. The notion of not using your a mouse scared me. Nonetheless, I buckled down.
                        <br><br>
                        The key concept that really helped me in learning the motions is the structure. If you have
                        ever watched a video instructing you how to use Vim, you should be familiar with the
                        [command]-[count]-[object] structure. You can do many different things given this notation and
                        Vim's supported commands. For example, if I wanted to edit the last 3 words (split by spaces), I
                        can execute the command 'c3b' when I am on the end of the line! Now it is just learning
                        <i>most</i> of them. Here are some typical keystrokes used:
                        <br><br>
                        <ul>
                            <li>w - Jumps forward to the start of the word</li>
                            <li>e - Jumps forward to the end of the word</li>
                            <li>f - Jumps forward to the next occurence of the following character</li>
                            <li>d - Command to delete the selection</li>
                            <li>c - Command to change the selection</li>
                        </ul><br>
                        One last key concept are the modes used in Vim. You need to be in "normal mode" to do the
                        keystrokes above. Outside of that, there is insert, visual, and command mode. There are a few
                        more, but those are the basic ones. Insert mode is where you can type as usual, like in any
                        other editor. Visual mode is a way to visually select text for further manupulation. Command
                        mode you are able to run different commands, such as the subsitute command, by typing the ':'
                        character first, then the command. An example of that would be ':%s/Deerk/Derek/g' which will
                        correct any typos of my name from 'Deerk' to 'Derek', on all lines, for as many occurences as
                        there are per line.
                        <br><br>
                        But the motions also hit a breaking point. Not all of the motions are, say, easy to remember or
                        recognize. And VSC*de is not super easy to make these customizations in. Yes, there is JSON, but
                        it just becomes increasingly harder and harder to manage customizations on a platform as I
                        wanted to. Moreover, VSC*de was becoming overcrowded, slow to load, and overall a pain.

                        <br><br>
                        Enter NeoVim.
                        <br><br>
                        <div style="text-align: center; font-size: 1.5rem;"><strong><u>NeoVim, the Editor to End All Editors</u></strong></div>
                        <div class="divider-container">
                            <div class="divider-line"></div>
                            <div class="divider-glow"></div>
                        </div>
                        After researching a few ways to make my wants and needs met in terms of editors. I found two
                        content creators in <a href="https://www.youtube.com/@teej_dv">teej_dv</a> and <a
                            href="https://www.youtube.com/c/theprimeagen">ThePrimeagen</a>. These two guys fueled my
                        want and desire to not only use NeoVim, but become a better, more efficient programmer. Using
                        some online guides mostly by those two, I was able to customize my own editor for what I need,
                        and what I use. No overhead. No funny business. <i>No Microsoft</i>. Was it easy? Not at all.
                        But definitely worth it. Once you understand the structure of the NeoVim setup, it becomes much
                        easier to edit it to your liking. Add and take away language support, add plugins you need.
                        Disable stuff you don't. It is cool to be able to have that much control.
                        <br><br>
                        The best and most important things about learning NeoVim are understanding the structure of
                        <i>your</i> setup, what plugins you use, what <a
                            href="https://neovim.io/doc/user/lsp.html">lsp</a> (language server protocol) you use and
                        what language you do it in. Plugins like <a
                            href="https://github.com/nvim-treesitter/nvim-treesitter">treesitter</a> and <a
                            href="https://github.com/williamboman/mason-lspconfig.nvim">Mason</a> are common ones you
                        will see in many setups. As in mine, sometimes you see <a
                            href="https://github.com/folke/lazy.nvim">lazy</a>, but more often than not, you see <a
                            href="https://github.com/wbthomason/packer.nvim">Packer</a>. Ultimately the choice is up to
                        you. Personally, I went a little bit crazy with all of the packages and ended up breaking my
                        configuration, and starting over... more times than I remember. Writing Lua was not something I
                        had ever done before either. I had never heard of an lsp before, so that was new as well!So I
                        was
                        thrown to the wolves, persay, but it ultimately landed me in a way better spot.
                        <br><br>
                        Fast forward to today. I use NeoVim daily. For work, school, and personal use. I tell my friends
                        that "I use NeoVim by the way", and have no regrets. I make macros that make me faster. More
                        efficient. And best overall, it is <i>fun</i>. It has added an additional layer of enjoyment to
                        programming for me. I strongly suggest you try it! Here is <a
                            href="https://github.com/DerekCorniello/NeoVim-Setup">my setup</a> as of right now. There is
                        also a good project being put on that helps beginners make their own setup faster, called <a
                            href="https://github.com/nvim-lua/kickstart.nvim">Kickstart</a>. Please try it out!
                        <br><br>
                        <div style="text-align: center; font-size: 1.5rem;"><strong><u>Concluding Remarks</u></strong></div>
                        <div class="divider-container">
                           <div class="divider-line"></div>
                           <div class="divider-glow"></div>
                        </div>
                        In the end, I see myself standing with NeoVim for a very long time. I don't see myself moving
                        back to VSC*de any time soon. The flexibility and understanding that I have for my editor is
                        unremarkable, the speed is blazingly fast, and my enjoyment for writing scripts is through the
                        roof. Please, push yourself to new heights and never stay comfortable in your environment.
                        Strive for a better development environment. For efficiency. For *enjoying* coding. Thank you
                        for reading, please reach out to me with any feedback!
                    </div>
                <br><br>
        <router-link 
          style="
                 text-align: center; 
                 background-color: #ff66b2; 
                 color: white; 
                 padding: 10px 20px; 
                 border-radius: 5px; 
                 text-decoration: none;"
            class="r-link" to="/blog">
            <- Back to Blogs
        </router-link>
    </BaseBlog>
</template>

<script>
import BaseBlog from '@/components/BaseBlog.vue';

export default {
  name: 'blog1',
  components: {
      BaseBlog
  },
};
</script>

<style scoped>
.divider-container {
  position: relative;
  height: 2px;
  margin: 1rem 0 2rem;
}

.divider-line {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 204, 0.8),
    transparent
  );
  width: 100%;
  position: absolute;
}

.divider-glow {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 204, 0.2),
    transparent
  );
  filter: blur(2px);
  width: 100%;
  position: absolute;
}
</style>
