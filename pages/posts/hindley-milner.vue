<template>
    <article class="blog-post">
        <header class="post-header">
            <h1>The MuxLang Type System: What Hindley-Milner Got Wrong</h1>
            <p class="meta">Published on Aug 9, 2026</p>
        </header>

        <div class="post-content">
            <p>
                I have been working on my programming language
                <a href="https://mux-lang.dev">Mux</a> for a while now, and I have been really
                interested in the way that different programming languages handle type systems. Mux
                uses a strong and static type system, and I have been exploring the different ways
                that type systems can be designed and implemented, and just adding in different
                features.
            </p>

            <p>
                While learning about this, the one type system that keeps coming up again and again
                is the Hindley-Milner type system.
            </p>

            <div class="divider-container">
                <div class="divider-line"></div>
                <div class="divider-glow"></div>
            </div>

            <h2>What is the Hindley-Milner (HM) Type System</h2>

            <p>
                One of the most influential type systems in the history of programming languages is
                the Hindley-Milner type system, which has been used in languages like ML, Haskell,
                and OCaml. The HM type system has also had large influence on languages like Rust,
                C#, and Swift, which have adopted some of its features and concepts. However,
                despite its widespread adoption and influence, the Hindley-Milner type system has
                several limitations and shortcomings that have been identified over the years.
            </p>

            <p>
                Mux specifically does not use the strictest version of the Hindley-Milner type
                system, and instead uses some different approaches to type inference and type
                checking. In this article, I will discuss some of the limitations of the
                Hindley-Milner type system, and why I chose to use a different approach in Mux.
            </p>

            <h3>The Basic Idea</h3>

            <p>One of the simplest examples of HM type inference is the identity function:</p>

            <pre><code>let identity = fun x -&gt; x</code></pre>

            <p>The compiler can infer that its type is:</p>

            <pre><code>'a -&gt; 'a</code></pre>

            <p>
                Here, <code>'a</code> is a type variable. The identity function does not care what
                type it receives. Whatever type it receives, it returns that same type. This is
                called "parametric polymorphism". The function can be used with an
                <code>int</code>, a <code>string</code>, or any other type without needing a
                separate implementation for each one. This smells a lot like generics!
            </p>

            <p>And that is exactly how TypeScript expresses this:</p>

            <pre><code>function identity&lt;T&gt;(x: T): T {
    return x;
}</code></pre>

            <p>Mux makes a similar distinction to TypeScript:</p>

            <pre><code>func identity&lt;T&gt;(T x) returns T {
    return x
}</code></pre>

            <p>
                So in this case, Mux is very similar to HM. The difference is in how Mux handles
                type inference and genericity in other cases. There are other concepts that we will
                go over first, but this is a good introduction to the basic idea of HM. Maybe you
                can see where this is going...
            </p>

            <div class="divider-container">
                <div class="divider-line"></div>
                <div class="divider-glow"></div>
            </div>

            <h2>What Hindley-Milner Got Right</h2>

            <p>First, I think there are a lot of things that HM does that is very useful and important.</p>

            <h3>Type Inference</h3>

            <p>HM's type inference is one of its biggest strengths.</p>

            <p>For example, instead of writing something to the effect of:</p>

            <pre><code>let x: int = 42</code></pre>

            <p>we can write:</p>

            <pre><code>let x = 42</code></pre>

            <p>
                and the compiler can determine that <code>x</code> has type <code>int</code>.
                TypeScript's is essentially the same:
            </p>

            <pre><code>let x = 42;</code></pre>

            <p>
                The compiler knows that <code>x</code> is a <code>number</code> without requiring
                an annotation. Mux also supports this kind of local inference:
            </p>

            <pre><code>auto x = 42</code></pre>

            <p>The difference is in <i>where</i> Mux wants inference to happen.</p>

            <p>
                Mux is intentionally more explicit about the types that define an API, while
                allowing inference inside expressions and local variables. More on what can and
                can't be inferred to come shortly.
            </p>

            <div class="divider-container">
                <div class="divider-line"></div>
                <div class="divider-glow"></div>
            </div>

            <h3>Unification</h3>

            <p>
                Another important part of HM is unification. Suppose the compiler knows that some
                value has type <code>'a</code> and later discovers that the value is being used as
                an <code>int</code>. The compiler can unify the two types, effectively determining
                that:
            </p>

            <pre><code>'a = int</code></pre>

            <p>
                This is what allows HM to infer surprisingly complicated types without requiring
                annotations everywhere. TypeScript has a similar concept when it infers generic type
                parameters:
            </p>

            <pre><code>function first&lt;T&gt;(items: T[]): T {
    return items[0];
}

const x = first([1, 2, 3]);</code></pre>

            <p>
                The compiler sees that the argument is a <code>number[]</code>, so it infers
                <code>T = number</code> and therefore <code>x: number</code>. TypeScript can also do
                some more advanced inference (which i think is kinda cool btw). For example:
            </p>

            <pre><code>function echo&lt;const T&gt;(value: T): T {
    return value;
}

const x = echo([1, 2, 3] as const);</code></pre>

            <p>The type checker can infer that <code>T</code> is the tuple type:</p>

            <pre><code>readonly [1, 2, 3]</code></pre>

            <p>
                instead of <code>number[]</code>. This is a more advanced feature that is very cool,
                but Mux does not currently support it :(
            </p>

            <p>Mux does this inference for generic calls as well:</p>

            <pre><code>func first&lt;T&gt;(list&lt;T&gt; items) returns T {
    return items[0]
}

auto x = first([1, 2, 3])

/* we can also define x as:
 * list&lt;int&gt; x = first([1, 2, 3])
 *
 * but we don't need to in this case :)
 */</code></pre>

            <p>
                The compiler can infer that <code>T = int</code> from the call above with no
                explicit type arguments.
            </p>

            <p>This is one of the places where Mux directly benefits from HM-style unification.</p>

            <div class="divider-container">
                <div class="divider-line"></div>
                <div class="divider-glow"></div>
            </div>

            <h1 class="section-break">What Hindley-Milner Got Wrong, and How Mux Does It Better</h1>

            <p>
                The interesting part is not that HM can infer types. It is how much information we
                want the compiler to infer in Mux. For Mux, I decided that inference should remove
                boilerplate without removing useful information from the code.
            </p>

            <div class="divider-container">
                <div class="divider-line"></div>
                <div class="divider-glow"></div>
            </div>

            <h2>0. HM Generalizes Types; Mux Declares Them</h2>

            <p>
                Consider our identity function again. During type inference, the compiler can
                determine that its type is:
            </p>

            <pre><code>'a -&gt; 'a</code></pre>

            <p>
                But it still needs to decide whether <code>'a</code> should mean one specific type,
                or whether the function can actually be used polymorphically. HM generalizes the
                type variable, giving us:
            </p>

            <pre><code>forall 'a. 'a -&gt; 'a</code></pre>

            <p>That means each use of <code>identity</code> can pick its own <code>'a</code>:</p>

            <pre><code>identity 42
identity "hello"</code></pre>

            <p>
                The first use can instantiate <code>'a</code> as <code>int</code>, while the second
                can instantiate it as <code>string</code>. This is an important distinction: the
                compiler is not simply saying that <code>identity</code> has some unknown type. It
                has determined that <code>identity</code> is universally polymorphic over
                <code>'a</code>. Inferring a type, then generalizing its free type variables, is a
                major part of what makes Hindley-Milner so powerful.
            </p>

            <p>
                Mux takes a different approach. Rather than discovering that a function should be
                universally polymorphic and then generalizing its inferred type, Mux makes the
                generic parameter explicit in the declaration. Consider:
            </p>

            <pre><code>func identity&lt;T&gt;(T x) returns T</code></pre>

            <p>
                The <code>&lt;T&gt;</code> is there on purpose: the polymorphism is part of the
                function's declaration rather than something the compiler has to discover from the
                function body.
            </p>

            <p>
                This is one of the recurring design decisions in Mux: the compiler still performs
                type inference, but the programmer explicitly defines where polymorphism exists.
            </p>

            <p>
                TypeScript is already on Mux's side here. Generic parameters are explicit in the
                declaration:
            </p>

            <pre><code>function map&lt;T, U&gt;(items: T[], f: (value: T) =&gt; U): U[] {
    return items.map(f);
}</code></pre>

            <p>
                The generic relationship is explicitly visible as <code>T -&gt; U</code>. A reader can
                immediately see that <code>map</code> takes a <code>T[]</code>, applies a function
                from <code>T</code> to <code>U</code>, and produces a <code>U[]</code>. An HM
                language can instead be written without explicitly declaring those type parameters:
            </p>

            <pre><code>let map = fun f xs -&gt;
    ...</code></pre>

            <p>
                The compiler can infer the equivalent polymorphic type. That is incredibly powerful,
                but I don't think it is the best tradeoff for Mux. Mux instead makes the public API
                explicit:
            </p>

            <pre><code>func map&lt;T, U&gt;(
    list&lt;T&gt; items,
    func(T) returns U f
) returns list&lt;U&gt; {
    ...
}</code></pre>

            <p>
                The Mux version is more verbose, but in my opinion it is more readable and easier to
                reason about because the important type relationships are visible where the function
                is defined. And when calling it, the compiler still does the boring work:
            </p>

            <pre><code>auto strings = map(numbers, to_string)</code></pre>

            <p>rather than requiring:</p>

            <pre><code>auto strings = map&lt;int, string&gt;(numbers, to_string)</code></pre>

            <p>This gives Mux a useful separation:</p>

            <ul>
                <li>The programmer declares the API.</li>
                <li>The compiler determines the concrete types.</li>
            </ul>

            <div class="divider-container">
                <div class="divider-line"></div>
                <div class="divider-glow"></div>
            </div>

            <h2>1. Don't Carry Unknown Types Forward</h2>

            <p>
                The interesting thing about HM is that if the compiler doesn't know a type yet, it
                can introduce a type variable and keep going.
            </p>

            <p>
                For example, an empty list can conceptually have the type <code>'a list</code>.
                There is nothing inherently wrong with that. The compiler knows it is a list, but it
                does not yet know what the elements are.
            </p>

            <p>TypeScript has a similar situation:</p>

            <pre><code>const empty = [];</code></pre>

            <p>The compiler has very little information about what <code>empty</code> is supposed to contain.</p>

            <p>Mux intentionally does not allow this ambiguity. Code with this declaration:</p>

            <pre><code>auto empty = []</code></pre>

            <p>will result in the following message:</p>

            <pre><code>error: Cannot infer type for empty list literal
--&gt; test.mux:1:14
   |
 1 | auto empty = []
   |              ^
   |
= help: Use an explicit type annotation, e.g. list&lt;int&gt; myVar = []</code></pre>

            <p>
                This is a useful error because it tells the programmer exactly what information is
                missing and how to provide it.
            </p>

            <p>
                The other thing they can do is provide enough information for the compiler to infer
                it from the values in the list:
            </p>

            <pre><code>auto filled = [1, 2, 3]</code></pre>

            <p>Here, the compiler can infer that <code>filled</code> is a <code>list&lt;int&gt;</code>.</p>

            <p>
                This raises a broader point. There is a difference between a type being representable
                by the type system and a type being useful to the programmer. HM is perfectly
                capable of representing <code>'a list</code> -- that is exactly what type variables
                are for. But an <code>'a list</code> that no later use ever pins down is a type the
                compiler will eventually have to refuse anyway, at some random spot that has nothing
                to do with where the empty list was declared.
            </p>

            <p>Mux instead prefers an explicit boundary at the declaration. The programmer can write:</p>

            <pre><code>list&lt;int&gt; empty = []</code></pre>

            <p>
                Now there is no unresolved type variable. The programmer has explicitly provided the
                information the compiler was missing.
            </p>

            <p>This comes down to a subtle difference in philosophy.</p>

            <p>HM asks:</p>

            <blockquote>Can this type remain polymorphic or unresolved?</blockquote>

            <p>Mux asks:</p>

            <blockquote>Do we have enough information to determine this type here?</blockquote>

            <p>
                If the answer is no, Mux asks the programmer for more information instead of
                carrying the unknown type forward.
            </p>

            <p>
                That is a deliberate tradeoff, not a technical limitation. And I think the resulting
                code is easier to reason about. When I see:
            </p>

            <pre><code>list&lt;int&gt; empty = []</code></pre>

            <p>I immediately know what the collection contains.</p>
            <p>
                I do not need to find another use of <code>empty</code> somewhere else in the
                program to figure out what type the compiler eventually inferred for it.
            </p>

            <div class="divider-container">
                <div class="divider-line"></div>
                <div class="divider-glow"></div>
            </div>

            <h2>2. Parametric Polymorphism Does Not Express Constraints</h2>

            <p>Consider:</p>

            <pre><code>'a -&gt; 'a</code></pre>

            <p>
                This tells us that the function works for any type <code>'a</code>. But it also
                tells us almost nothing about <code>'a</code>.
            </p>

            <p>
                That is exactly what we want for the identity function. It becomes less useful when
                writing functions that need to operate on the generic value. TypeScript solves this
                using constraints:
            </p>

            <pre><code>function stringify&lt;T extends Printable&gt;(value: T): string {
    return value.print();
}</code></pre>

            <p>
                Now <code>T</code> is still generic, but the compiler knows that <code>T</code>
                satisfies <code>Printable</code>. Mux has the same basic idea through generic bounds
                and interfaces:
            </p>

            <pre><code>func stringify&lt;T is Printable&gt;(T value) returns string {
    return value.print()
}</code></pre>

            <p>
                This lets Mux express a distinction that plain HM polymorphism does not naturally
                express.
            </p>

            <p>
                The classic HM-era answer to this is type classes, like Haskell's, layered on top of
                the base system. Mux just uses a simpler spelling.
            </p>

            <pre><code>T</code></pre>

            <p>means:</p>

            <blockquote>This function is parameterized over some type <code>T</code>.</blockquote>

            <p>While:</p>

            <pre><code>T is Printable</code></pre>

            <p>means:</p>

            <blockquote>
                This function is parameterized over some type <code>T</code> that is known to
                satisfy <code>Printable</code>.
            </blockquote>

            <p>
                This is much more useful for a language with interfaces and generic programming. The
                compiler can still treat <code>T</code> as an unknown concrete type, while also
                knowing what operations are guaranteed to be available on it.
            </p>

            <div class="divider-container">
                <div class="divider-line"></div>
                <div class="divider-glow"></div>
            </div>

            <h2>Where This Leaves Mux</h2>

            <p>At this point, I don't think it makes much sense to describe Mux as an HM language.</p>

            <p>
                Instead, I think of Mux as borrowing one of HM's most useful pieces:
                <b>unification-based type inference</b>.
            </p>

            <p>Mux then builds a different type system around it:</p>

            <pre><code>explicit generics
+ local type inference
+ generic bounds
+ interfaces
+ nominal types
+ monomorphization</code></pre>

            <p>The philosophy is fairly simple:</p>

            <blockquote class="philosophy">
                <p>
                    <b>The programmer should describe the important type relationships. The compiler
                    should fill in the boring parts.</b>
                </p>
            </blockquote>

            <p>HM showed how far a compiler can go in inferring those relationships automatically.</p>

            <p>
                Mux is therefore not trying to replace HM's inference model so much as make a
                different set of tradeoffs about where that inference is allowed to operate.
            </p>

            <p>
                What I learned from making Mux is that <b>just because the compiler can infer
                something does not necessarily mean that it should.</b>
            </p>
        </div>

        <footer class="post-footer">
            <NuxtLink to="/posts" class="btn"> Back to Posts </NuxtLink>
        </footer>
    </article>
</template>

<script setup lang="ts">
useHead({
    title: 'The MuxLang Type System: What Hindley-Milner Got Wrong',
    meta: [
        {
            name: 'description',
            content:
                'How the Mux programming language handles type inference differently than Hindley-Milner - explicit generics, local inference, and where a compiler should (and should not) infer types.',
        },
        {
            property: 'og:title',
            content: 'The MuxLang Type System: What Hindley-Milner Got Wrong',
        },
        {
            property: 'og:description',
            content:
                'Why Mux does not use the Hindley-Milner type system, and the different tradeoffs it makes about where type inference is allowed to operate.',
        },
        { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
        { property: 'og:url', content: 'https://derekcorn.dev/posts/hindley-milner' },
        { property: 'og:type', content: 'article' },
        {
            name: 'twitter:title',
            content: 'The MuxLang Type System: What Hindley-Milner Got Wrong',
        },
        {
            name: 'twitter:description',
            content: 'How the Mux programming language handles type inference differently.',
        },
        { name: 'twitter:image', content: 'https://derekcorn.dev/preview.png' },
    ],
});
</script>

<style scoped>
.blog-post {
    max-width: 700px;
    margin: 0 auto;
}

.post-header {
    margin-bottom: 2rem;
}

.post-header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.meta {
    color: var(--text-muted);
}

.post-content {
    line-height: 1.8;
}

.post-content h2 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
}

.post-content h3 {
    font-size: 1.25rem;
    margin: 1.75rem 0 1rem;
}

.post-content h1.section-break {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
}

.post-content p {
    margin-bottom: 1rem;
}

.post-content ul {
    margin: 1rem 0 1rem 1.5rem;
}

.post-content li {
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
}

.post-content code {
    font-family: var(--font-mono);
    font-size: 0.9em;
    background: var(--bg-mantle);
    border: 1px solid var(--border-light);
    border-radius: 4px;
    padding: 0.1rem 0.35rem;
}

.post-content pre {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    line-height: 1.6;
    background: var(--bg-mantle);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1rem 1.25rem;
    margin: 1.25rem 0;
    overflow-x: auto;
}

.post-content pre code {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    background: none;
    border: none;
    border-radius: 0;
    padding: 0;
}

.post-content blockquote {
    margin: 1rem 1.5rem;
    padding: 0.25rem 1rem;
    border-left: 3px solid var(--accent-mauve);
    color: var(--text-secondary);
}

.post-content blockquote code {
    color: var(--accent-blue);
}

.post-content blockquote.philosophy {
    border-left-color: var(--accent-mauve);
    color: var(--text-primary);
}

.post-content blockquote.philosophy p {
    margin-bottom: 0;
}

.post-footer {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
}

.divider-container {
    position: relative;
    margin: 2rem 0;
    height: 2px;
}

.divider-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.divider-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 4px;
    background: var(--primary);
    filter: blur(8px);
    opacity: 0.5;
}

@media (max-width: 720px) {
    .post-content pre {
        font-size: 0.82rem;
        padding: 0.85rem 1rem;
    }
}
</style>