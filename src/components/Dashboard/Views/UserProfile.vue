<template>
    <div>
        <user-card></user-card>
        <user-card></user-card>
        <user-card></user-card>
    </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  export default {
    components: {
      EditProfileForm,
      UserCard,
      MembersCard
    }
  }

</script>
<style>
user-card{
  max-width: 100px;
}
</style>
