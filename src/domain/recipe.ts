export class Recipe {
  _name!: string;
  _category?: string;
  _prep_time?: number;
  _description?: string;

  constructor(aName: string) {
    this.name = aName;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  get prep_time(): number | undefined {
    return this._prep_time;
  }

  set prep_time(aPrepTime: number) {
      this._prep_time = aPrepTime;
  }
  
  get description(): string | undefined {
    return this._description;
  }

  set description(aDescription: string) {
    this._description = aDescription;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - tiempo de preparación: ${this.prep_time} - descripción: ${this.description}`;
  }
}
