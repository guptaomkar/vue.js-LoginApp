import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('../views/Feed.vue'),
      meta:{
        requiresAuth:true,
      }
    },

  ]
})

const getCurrentUser=()=>{
  return new Promise((resolve,reject)=>{
    const removeListener=onAuthStateChanged(
      getAuth(),
      (user)=>{
        removeListener();
        resolve(user);
      },
      reject
    )
  });
}

router.beforeEach(async(to,from,next)=>{
  if(to.matched.some((record)=>record.meta.requiresAuth)){

    if(await getCurrentUser()){
      next();
    }else{
      alert("you dont have access!");
      next("/");
    }
  }else{
    next();
  }
});

export default router
