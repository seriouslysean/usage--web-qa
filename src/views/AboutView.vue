<script setup>
// TODO
</script>

<template>
    <h1>Web QA Usage</h1>

    <figure class="about-image">
        <img src="/images/dont-panic-andrey-metelev.jpg" title="Panic Written in Dice" class="about-image__image" />
        <figcaption class="about-image__caption">
            Photo by <a href="https://unsplash.com/@metelevan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" title="@metelevan on Unsplash" _target="blank">Andrey Metelev</a> on <a href="https://unsplash.com/s/photos/dont-panic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" title="Free High Resolution Photos at Unsplash" _target="blank">Unsplash</a>
        </figcaption>
    </figure>

    <section class="about-image__text">
        <p>Web QA Usage is an example app to showcase how various End to End testing frameworks can be used. It currently supports <a href="https://www.cypress.io/" title="Cypress End to End Testing Framework" _target="blank">Cypress</a>, <a href="https://testcafe.io/" title="TestCafe End to End Testing Framework" _target="blank">TestCafe</a> and <a href="https://playwright.dev/" title="Playwright End to End Testing Framework" _target="blank">Playwright</a>.</p>
    </section>
</template>

<style lang="scss" scoped>
.about-image {
    margin-bottom: 2em;

    &__image {
        width: 100%;
    }

    &__caption {
        font-size: 0.75em;
    }

    &__text {
        font-size: 1.5em;
        line-height: 150%;
    }

}
</style>
