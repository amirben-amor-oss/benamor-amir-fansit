<script>
  // Prochain match : 30 juin 2024, 18:30
  const matchDate = new Date('2024-06-30T18:30:00');
  function updateCountdown() {
    const now = new Date();
    const diff = matchDate - now;
    if (diff <= 0) {
      document.getElementById('countdown').innerHTML = "Le match a commencé !";
      return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const mins = Math.floor((diff / (1000*60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    document.getElementById('countdown').innerHTML =
      `${days}j ${hours}h ${mins}m ${secs}s`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
</script>