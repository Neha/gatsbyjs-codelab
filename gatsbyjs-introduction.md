# :collision: Gatsbyjs Introduction :collision:

## :diamond_shape_with_a_dot_inside: What is Gatsbyjs

Static site generator which uses Rectjs and it has rich pugin ecosystem.

## :diamond_shape_with_a_dot_inside: Features of Gatsbyjs

- Based on Reactjs
- Have plugins for almost everything
- Best for static site generation
- Everything is configurable
- Support GraphQL
- Fast*
- PWA support
- Support almost all way of reading the content - API, markdown files, medium, wordpress etc.

## :diamond_shape_with_a_dot_inside: Gatsbyjs under the hood

Gatsbyjs is based on the Reactjs and you can use GraphQL to pull the content from almost
anywhere. 

## :diamond_shape_with_a_dot_inside: When to/not-to use Gatsbyjs

**When to use**

- When you want to build content-based sites
- when you are looking to build something quick
- When you want to move your blogs from 3rd party to your own domain
- When you don't want to build the CMS

**When not-to use**

- Where the requirement is to build dynamic based websites

## :diamond_shape_with_a_dot_inside: What makes Gatsbyjs Fast?
- Fast is very relative term but Gatsbyjs claims that it is very fast. Reason is use
of Webpack and other lo of pre-optimization Gatsbyjs has already taken care.

## :diamond_shape_with_a_dot_inside: Gatsbyjs vs Nextjs

Both Gatsbyjs and Nextjs are Reactjs based. Both follow the same folder strcutre and both do SSR (server side rendering) where Reactjs limit by the same API - "dangeourselyHTML".

However , here is the comparison table of both

|                    |       Gatsbyjs       |     Nextjs 
| ----------------- | --------------------- | -------------- |
| PWA               | Yes                   | Not by default |
| Type              | Static site generator | More than SSG] |
| Plugins           | Yes                   | NO |
| Fast              | Gatsby team claims it             | No such metrics |
| GraphQL           | Full support                   | Can work |
| SEO         |                   Good    |  Good|
| HTML     |           At the build time            | On Server + local |
| Output Files |                 HTML, CSS, JS and Nodejs files      | HTML, CSS, and JS|
| Open Issues     |      418                 | 203 |
| Learniing curve   |        Reactjs, Gatsbyjs, Gatsbyjs API. GraphQL                |  Reactjs, Nextjs and Nextjs API |
| Documentation     |           Good            |   Good |

## :diamond_shape_with_a_dot_inside: Gatsbyjs Plugins Ecosystem

There are almost plugin for everything and you can create your own plugins too.
- SEO
- International languages
- Transformer
- Image (lazy loading)
- Helmet

## :diamond_shape_with_a_dot_inside: Who is using Gatsbyjs?

Here is the official feature : https://www.gatsbyjs.org/showcase/

To name few :
- Reactjs
- Codesandbox
- and many more.

## :diamond_shape_with_a_dot_inside: Gatsbyjs and Performance

As per me, performance is very relative term. Unless and until same app is tested with different tech-stack and under same tools and traffic. Though Gatsbyjs claim for Blazing-fast site. It could be. Here is the lighthouse score of the application we have developed.

- Speed Index (page load performance) & Time to interact
- webpagespeed.org

Improve:

- TTI - time to interact
- rendering critical path - AIM
- progressive rendering - AIM
- Code spliting - Load less JS - PLAN
- Tree shaking - PLAN

Gatsbyjs do performance optimizations automatically

- inline critical css
- link preload
- pre-route (data-spilitng)
- prefetch

Tradeoff

- Lot of internal things are complicated
- Potlinal limit the use cases

It has done its part now you have to take care

## :diamond_shape_with_a_dot_inside: Gatsbyjs Limitations

- Limited use cases.

# :hearts: Contributions and Collabrations

If you see any issue please log the issue. If you want to add anything new please raise PR.

You can reach me at nsharma215@gmail.com or follow me at twitter.com/hellonehha
