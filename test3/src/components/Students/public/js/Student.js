import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Students',
    data(){
        return{
            search : ""
        }
    },
    methods: {
        ...mapActions(['fetchStudents', 'deleteStudent','seachStudents']),
        handsearch(e) {
            e.preventDefault();
            this.seachStudents(this.search);
        },
        editHanld(value){
            this.$store.commit('setid',value);
        }
    },
    computed: mapGetters(['allStudents']),
    created() {
        this.fetchStudents();
    },
    // updated() {
    //     this.fetchStudents();
    // },

}