const infiniteArray = (input: any[]) => {
  if (!Array.isArray(input)) {
    throw new TypeError('Expected an array');
  }

  return new Proxy(input, {
    get(target: any[], name: PropertyKey, receiver: any): any {
      if (typeof name !== 'string') {
        return Reflect.get(target, name, receiver);
      }

      let index: number = Number(name);

      if (Number.isNaN(index)) {
        return Reflect.get(target, name, receiver);
      }

      if (index % target.length === 0) {
        index = 0;
      } else if (index < 0) {
        index = target.length + index % target.length;
      } else if (index >= target.length) {
        index %= target.length;
      }

      return target[index];
    },
    set(target: any[], name: PropertyKey, value: any, receiver: any): boolean {
      if (typeof name !== 'string') {
        return Reflect.set(target, name, value, receiver);
      }

      const index: number = Number(name);

      if (Number.isNaN(index)) {
        return Reflect.set(target, name, value, receiver);
      }

      if (index < 0) {
        if (index % target.length === 0) {
          target[0] = value;
        } else {
          target[target.length + index % target.length] = value;
        }
      } else {
        target[index] = value;
      }

      return true;
    },
  });
};

export default infiniteArray;
