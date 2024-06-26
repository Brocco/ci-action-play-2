import { interval, map, take, tap, lastValueFrom } from 'rxjs';

async function main() {
  await lastValueFrom(
    interval(1000).pipe(
      take(5),
      map((i) => i * 2),
      tap(console.log)
    )
  );
}

main();
