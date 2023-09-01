// import { ref, computed } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("HomeStore", {
  state: () => ({
    articles: [],
    searchArticles: [],
    categories: [],
    category: "",
    fewCategories: [],
    sidebarArticles: [],
    loading: false,
    article: {},
    categoryArticles: [],
    pageNo: 0,
    insertCategory: false,
    updateCategory: false,
  }),
  getters: {
    featuredArticle() {
      const article = this.articles.filter((article) => article.is_featured);
      return article;
    },
    notFeaturedArticles() {
      const articles = this.articles.filter((article) => !article.is_featured);
      return articles;
    },
  },
  actions: {
    setPage(no) {
      this.pageNo = no;
      return this.pageNo;
    },
    getArticles(per_page, page_number) {
      this.loading = true;
      axios
        .get(
          `http://localhost:7200/articles?_expand=category&_limit=${per_page}&_page=${page_number}`
        )
        .then((response) => (this.articles = response.data));
      // .then((response) => console.log(response.data));
      // console.log(this.articles);
      this.loading = false;
    },
    getSearchArticles(searchText) {
      this.loading = true;
      axios
        .get(`http://localhost:7200/articles?_expand=category&q=${searchText}`)
        .then((response) => (this.searchArticles = response.data));
      // .then((response) => console.log(response.data));
      // console.log(this.articles);
      this.loading = false;
    },
    getCategories() {
      axios
        .get(`http://localhost:7200/categories?_embed=articles`)
        .then((response) => (this.categories = response.data));
      // .then((response) => console.log(response.data));
    },
    getFewCategories() {
      axios
        .get(`http://localhost:7200/categories?_embed=articles`)
        .then((response) =>
          response.data.filter((category) => category.articles.length > 0)
        )
        .then((catData) => (this.fewCategories = catData));
      // .then((response) => console.log(response.data));
    },
    getFewArticles() {
      this.loading = true;
      axios
        .get(`http://localhost:7200/articles?_limit=4`)
        .then((response) => (this.sidebarArticles = response.data));
      this.loading = false;
    },
    categoryPostCount(id) {
      const categories = this.categories.find((category) => category.id === id);
      return categories.articles.length;
    },
    getArticle(id) {
      this.loading = true;
      axios
        .get(`http://localhost:7200/articles/${id}?_expand=category`)
        .then((response) => (this.article = response.data));
      // .then((response) => console.log(response.data));
      // console.log(this.articles);
      this.loading = false;
    },
    getCategoyPost(id) {
      this.loading = true;
      axios
        .get(`http://localhost:7200/categories/${id}?_embed=articles`)
        .then((response) => (this.categoryArticles = response.data.articles));
      // .then((response) => console.log(response.data));
      // console.log(this.articles);
      this.loading = false;
    },
    getCategoryName(id) {
      axios
        .get(`http://localhost:7200/categories/${id}`)
        .then((response) => (this.category = response.data.name));
    },
    getDesiredState() {
      return desiredState;
    },
  },
});
