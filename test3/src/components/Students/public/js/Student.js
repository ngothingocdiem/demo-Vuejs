import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Students',
    methods: {
        ...mapActions(['fetchStudents', 'deleteStudent', 'changeCompletedStudent'])
    },
    computed: mapGetters(['allStudents']),
    created() {
        this.fetchStudents()
    }
}