<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <v-list
        :lines="false"
        density="compact"
      >
        <v-list-item
          value="/submit-re-examination"
          href="/submit-re-examination"
          color="primary"
          :link="true"
        >
          Табло №1
        </v-list-item>
        <v-list-item
          value="/return-reexamination"
          href="/return-reexamination"
          color="primary"
          :link="true"
        >
          Табло №2
        </v-list-item>
        <v-list-item
          value="/invite-to-inspection-area"
          href="/invite-to-inspection-area"
          color="primary"
          :link="true"
        >
          Табло №3
        </v-list-item>
        <v-list-item
          value="/deliver-re-examination-fts"
          href="/deliver-re-examination-fts"
          color="primary"
          :link="true"
        >
          Табло №4
        </v-list-item>
      </v-list>
    </nav>
  </div>
</template>

<style module lang="scss"></style>
