<script lang="ts">
    import newMoon from "../lib/assets/new-moon.svg";

    function calculateProgress(startDate: Date, endDate: Date): number {
        const currentDate = new Date();
        const totalDays = Math.ceil(
            (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
        );
        const elapsedDays = Math.ceil(
            (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
        );
        return (elapsedDays / totalDays) * 100;
    }

    const startDate = new Date('2023-08-01');
    const endDate = new Date('2023-08-30');
    const progress = calculateProgress(startDate, endDate);
</script>

<div class="progress-container">
    <div class="bubble" style="margin-left: {progress}%">
        <img src="{newMoon}" width="32px" height="32px" alt="moon">
    </div>
    <div class="progress-done">
        <div class="progress-not-done" style="width: {progress}%"></div>
    </div>
    <div class="timeline">
        <span>01 Aug</span>
        <span>30 Aug</span>
    </div>
</div>