  <template>
  <main>
    <section class="section">
      <div class="container">
        <div class="row no-gutters-lg">
          <div class="col-12">
            <h2 class="section-title">Latest Articles</h2>
          </div>
          <div class="col-lg-8 mb-5 mb-lg-0">
            <div class="row">
              <div class="col-12 mb-4">
                <!-- featured article -->
                <FeaturedArticle :featuredArticle="featuredArticle" />
                <!-- end featured article -->
              </div>
              <!-- article -->
              <div
                class="col-md-6 mb-4"
                v-for="article in notFeaturedArticles"
                :key="article.id"
              >
                <Article :article="article" />
              </div>

              <!-- end article -->

              <!-- full pagination -->

              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <nav class="mt-4">
                      <!-- pagination -->
                      <nav class="mb-md-50">
                        <ul class="pagination justify-content-center">
                          <li class="page-item">
                            <button
                              @click="Prev()"
                              class="page-link"
                              :class="pageNumber == 1 ? 'disabled' : ''"
                              id="prevButton"
                              aria-label="Pagination Arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                                />
                              </svg>
                            </button>
                          </li>
                          <li
                            class="page-item"
                            v-for="page in pages"
                            :key="page"
                            :id="'page-' + page"
                          >
                            <a @click="navigatePage(page)" class="page-link">
                              {{ page }}
                            </a>
                          </li>
                          <!-- <li class="page-item">
                            <a href="#!" class="page-link"> 2 </a>
                          </li> -->
                          <li class="page-item">
                            <button
                              @click="Next()"
                              class="page-link"
                              id="nextButton"
                              aria-label="Pagination Arrow"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                />
                              </svg>
                            </button>
                          </li>
                        </ul>
                        <!-- <button>new</button> -->
                      </nav>
                      <!-- end pagination -->
                    </nav>
                  </div>
                </div>
              </div>

              <!-- end full pagination -->
            </div>
            <!-- end row -->
          </div>
          <!-- end col-lg - 8 -->

          <!-- sidebar start -->
          <side-bar />
          <!-- sidebar end -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </main>
</template>



<script>
import SideBar from "../SideBar.vue";
import Article from "../Article.vue";
import AuthorInfo from "./MainComponents/AuthorInfo.vue";
import FeaturedArticle from "./MainComponents/FeaturedArticle.vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "../../stores/HomeStore";
import axios from "axios";
import { onMounted } from "vue";

export default {
  components: {
    FeaturedArticle,
    Article,
    AuthorInfo,
    SideBar,
  },
  async setup() {
    const HomeStore = useHomeStore();

    const per_page = 5;
    let pageNumber = 1;
    let buttonDisabled = false;

    onMounted(() => {
      if (pageNumber == 1) {
        document.getElementById("page-1").classList.add("active");
        document.getElementById("nextButton").classList.remove("disabled");
      }
    });

    HomeStore.getArticles(per_page, pageNumber);

    const { articles, loading, featuredArticle, notFeaturedArticles, pageNo } =
      storeToRefs(HomeStore);

    const res = await axios.get("http://localhost:7200/articles");
    const totalArticls = res.data.length;
    let totalPages = Math.ceil(totalArticls / per_page);
    let pages = [];
    let i = 1;

    let homePageNo = pageNo.value;

    if (homePageNo == 1) {
      let pageNo = document.getElementById(`page-${homePageNo}`);
      let pages = document.getElementsByClassName("page-item");
      Array.from(pages).forEach((pageName) => {
        pageName.classList.remove("active");
        pageNo.classList.add("active");
      });
    }

    const paginationPages = () => {
      while (i <= totalPages) {
        pages.push(i);
        i++;
      }
    };
    paginationPages();

    const Next = () => {
      if (pageNumber + 1 <= totalPages) {
        document.getElementById("prevButton").classList.remove("disabled");

        pageNumber = pageNumber + 1;
        HomeStore.getArticles(per_page, pageNumber);
        document.documentElement.scrollTop = 0;
        let pageNo = document.getElementById(`page-${pageNumber}`);
        let pages = document.getElementsByClassName("page-item");

        Array.from(pages).forEach((pageName) => {
          pageName.classList.remove("active");
          pageNo.classList.add("active");
        });
      } else {
        document.getElementById("nextButton").classList.add("disabled");
        alert("No More Post");
      }
    };
    const Prev = () => {
      if (pageNumber <= totalPages && pageNumber !== 1) {
        document.getElementById("nextButton").classList.remove("disabled");
        pageNumber = pageNumber - 1;
        HomeStore.getArticles(per_page, pageNumber);

        let pageNo = document.getElementById(`page-${pageNumber}`);
        let pages = document.getElementsByClassName("page-item");

        Array.from(pages).forEach((pageName) => {
          pageName.classList.remove("active");
          pageNo.classList.add("active");
        });

        document.documentElement.scrollTop = 0;
      } else if (pageNumber == 1) {
        document.getElementById("prevButton").classList.add("disabled");
        alert("No More Previous Post");
      }
    };
    const navigatePage = (page) => {
      pageNumber = page;
      if (pageNumber > 1) {
        document.getElementById("prevButton").classList.remove("disabled");
      }
      if (pageNumber < totalPages) {
        document.getElementById("nextButton").classList.remove("disabled");
      }
      HomeStore.getArticles(per_page, pageNumber);
      document.documentElement.scrollTop = 0;
      let pageNo = document.getElementById(`page-${page}`);
      // pageNo.classList.add("active");
      let pages = document.getElementsByClassName("page-item");

      Array.from(pages).forEach((pageName) => {
        pageName.classList.remove("active");
        pageNo.classList.add("active");
      });
    };
    return {
      articles,
      loading,
      featuredArticle,
      notFeaturedArticles,
      per_page,
      buttonDisabled,
      Next,
      pageNumber,
      Prev,
      totalPages,
      paginationPages,
      pages,
      navigatePage,
    };
  },
};
</script>

<style>
.disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0.6;
}
</style>