<template>
    <div class="filter">
        <select @change="filterStudent($event)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script src="./public/js/filter.js"></script>
<style src="./public/sass/style.scss" lang="scss" scoped></style>