<script setup lang="ts">
const bubble: Ref<HTMLElement | undefined> = ref();
const initSize = ref(0);
const halfSize = computed(() => initSize.value / 2);

function updatePos(event: MouseEvent | TouchEvent) {
  if (!bubble.value) return;

  const pointerEvent =
    (event as TouchEvent).touches?.[0] ?? (event as MouseEvent);
  const targettedNode = pointerEvent.target as HTMLElement;

  let cursorX =
    (event as MouseEvent).clientX ??
    (event as TouchEvent).touches?.[0]?.clientX;
  let cursorY =
    (event as MouseEvent).clientY ??
    (event as TouchEvent).touches?.[0]?.clientY;
  let width = "10rem";
  let height = "10rem";
  let scale = "1";

  // If targetted node is a target
  if ("target" in targettedNode.attributes) {
    const rect = targettedNode.getBoundingClientRect();

    const left = rect.x + halfSize.value;
    const top = rect.y + halfSize.value;

    cursorX = left + (left - (cursorX - halfSize.value)) * 0.1;
    cursorY = top + (top - (cursorY - halfSize.value)) * 0.1;

    height = `${rect.height}px`;
    width = `${rect.width}px`;

    scale = "1.3";
  }

  bubble.value.style.opacity = "1";
  bubble.value.style.width = width;
  bubble.value.style.height = height;
  bubble.value.style.setProperty("--tw-scale-x", scale);
  bubble.value.style.setProperty("--tw-scale-y", scale);
  bubble.value.style.setProperty(
    "--tw-translate-x",
    `${cursorX - halfSize.value}px`,
  );
  bubble.value.style.setProperty(
    "--tw-translate-y",
    `${cursorY - halfSize.value}px`,
  );
}

function hideBubble() {
  if (!bubble.value) return;
  bubble.value.style.opacity = "0";
  bubble.value.style.setProperty("--tw-scale-x", "0");
  bubble.value.style.setProperty("--tw-scale-y", "0");
}

onMounted(() => {
  const svg = document.querySelector("svg");
  if (svg) {
    initSize.value = svg.getBoundingClientRect().width;
  }

  if (window.matchMedia("(any-pointer: coarse)").matches) {
    addEventListener("touchmove", updatePos, { passive: true });
    addEventListener("touchend", hideBubble, { passive: true });
  }
  addEventListener("mousemove", updatePos, { passive: true });
  addEventListener("mouseout", hideBubble, { passive: true });
});
</script>

<template>
  <Html class="overflow-hidden select-none bg-charcoal text-white">
    <Body>
      <div
        class="relative flex flex-col gap-6 items-center justify-center font-black font-muli min-h-[calc(100dvh)]"
      >
        <h1 class="sr-only">Pulsar</h1>
        <Comet target class="h-32 w-32 sm:h-40 sm:w-40" />
        <p target class="text-6xl sm:text-8xl">
          <span class="sr-only">Coming</span>
          soon.
        </p>
      </div>
      <div
        ref="bubble"
        class="absolute pointer-events-none top-0 left-0 opacity-0 scale-0 rounded-full h-32 w-32 sm:h-40 sm:w-40 backdrop-invert transition-all ease-linear duration-75"
      />
    </Body>
  </Html>
</template>
