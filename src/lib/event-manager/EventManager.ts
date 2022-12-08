export type Listener<T> = (data: T) => void;

export type Unsubscribe = () => void;

export class EventManager<
  EventsMap extends Record<string, any>,
  EventName extends keyof EventsMap = keyof EventsMap,
> {
  private subscriptions: {
    [K in EventName]?: Set<Listener<EventsMap[K]>>;
  } = {};

  subscribe<E extends EventName>(event: E, listener: Listener<EventsMap[E]>): Unsubscribe {
    this.subscriptions[event] = this.subscriptions[event] ?? new Set<Listener<EventsMap[E]>>();
    this.subscriptions[event]?.add(listener);

    return () => {
      this.subscriptions[event]?.delete(listener);
    };
  }

  trigger<E extends EventName>(event: E, data: EventsMap[E]) {
    this.subscriptions[event]?.forEach((listener) => {
      listener(data);
    });
  }
}
