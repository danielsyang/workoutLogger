import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateExercise = {
  __typename?: 'AggregateExercise';
  count?: Maybe<ExerciseCountAggregate>;
  avg?: Maybe<ExerciseAvgAggregate>;
  sum?: Maybe<ExerciseSumAggregate>;
  min?: Maybe<ExerciseMinAggregate>;
  max?: Maybe<ExerciseMaxAggregate>;
};

export type AggregateExerciseRecord = {
  __typename?: 'AggregateExerciseRecord';
  count?: Maybe<ExerciseRecordCountAggregate>;
  avg?: Maybe<ExerciseRecordAvgAggregate>;
  sum?: Maybe<ExerciseRecordSumAggregate>;
  min?: Maybe<ExerciseRecordMinAggregate>;
  max?: Maybe<ExerciseRecordMaxAggregate>;
};

export type AggregateWorkout = {
  __typename?: 'AggregateWorkout';
  count?: Maybe<WorkoutCountAggregate>;
  min?: Maybe<WorkoutMinAggregate>;
  max?: Maybe<WorkoutMaxAggregate>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type EnumPerceptionFieldUpdateOperationsInput = {
  set?: Maybe<Perception>;
};

export type EnumPerceptionFilter = {
  equals?: Maybe<Perception>;
  in?: Maybe<Array<Perception>>;
  notIn?: Maybe<Array<Perception>>;
  not?: Maybe<NestedEnumPerceptionFilter>;
};

export type EnumPerceptionWithAggregatesFilter = {
  equals?: Maybe<Perception>;
  in?: Maybe<Array<Perception>>;
  notIn?: Maybe<Array<Perception>>;
  not?: Maybe<NestedEnumPerceptionWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumPerceptionFilter>;
  max?: Maybe<NestedEnumPerceptionFilter>;
};

export type Exercise = {
  __typename?: 'Exercise';
  id: Scalars['String'];
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  workoutId: Scalars['String'];
  workout: Workout;
  Set: Array<ExerciseRecord>;
};


export type ExerciseSetArgs = {
  where?: Maybe<ExerciseRecordWhereInput>;
  orderBy?: Maybe<Array<ExerciseRecordOrderByInput>>;
  cursor?: Maybe<ExerciseRecordWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ExerciseRecordScalarFieldEnum>>;
};

export type ExerciseAvgAggregate = {
  __typename?: 'ExerciseAvgAggregate';
  sets?: Maybe<Scalars['Float']>;
  reps?: Maybe<Scalars['Float']>;
};

export type ExerciseCountAggregate = {
  __typename?: 'ExerciseCountAggregate';
  id: Scalars['Int'];
  name: Scalars['Int'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  workoutId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ExerciseCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workout: WorkoutCreateNestedOneWithoutExerciseInput;
  Set?: Maybe<ExerciseRecordCreateNestedManyWithoutExerciseInput>;
};

export type ExerciseCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workoutId: Scalars['String'];
};

export type ExerciseCreateManyWorkoutInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ExerciseCreateManyWorkoutInputEnvelope = {
  data: Array<ExerciseCreateManyWorkoutInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ExerciseCreateNestedManyWithoutWorkoutInput = {
  create?: Maybe<Array<ExerciseCreateWithoutWorkoutInput>>;
  connectOrCreate?: Maybe<Array<ExerciseCreateOrConnectWithoutWorkoutInput>>;
  createMany?: Maybe<ExerciseCreateManyWorkoutInputEnvelope>;
  connect?: Maybe<Array<ExerciseWhereUniqueInput>>;
};

export type ExerciseCreateNestedOneWithoutSetInput = {
  create?: Maybe<ExerciseCreateWithoutSetInput>;
  connectOrCreate?: Maybe<ExerciseCreateOrConnectWithoutSetInput>;
  connect?: Maybe<ExerciseWhereUniqueInput>;
};

export type ExerciseCreateOrConnectWithoutSetInput = {
  where: ExerciseWhereUniqueInput;
  create: ExerciseCreateWithoutSetInput;
};

export type ExerciseCreateOrConnectWithoutWorkoutInput = {
  where: ExerciseWhereUniqueInput;
  create: ExerciseCreateWithoutWorkoutInput;
};

export type ExerciseCreateWithoutSetInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workout: WorkoutCreateNestedOneWithoutExerciseInput;
};

export type ExerciseCreateWithoutWorkoutInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Set?: Maybe<ExerciseRecordCreateNestedManyWithoutExerciseInput>;
};

export type ExerciseGroupBy = {
  __typename?: 'ExerciseGroupBy';
  id: Scalars['String'];
  name: Scalars['String'];
  sets: Scalars['Int'];
  reps: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  workoutId: Scalars['String'];
  count?: Maybe<ExerciseCountAggregate>;
  avg?: Maybe<ExerciseAvgAggregate>;
  sum?: Maybe<ExerciseSumAggregate>;
  min?: Maybe<ExerciseMinAggregate>;
  max?: Maybe<ExerciseMaxAggregate>;
};

export type ExerciseListRelationFilter = {
  every?: Maybe<ExerciseWhereInput>;
  some?: Maybe<ExerciseWhereInput>;
  none?: Maybe<ExerciseWhereInput>;
};

export type ExerciseMaxAggregate = {
  __typename?: 'ExerciseMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sets?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workoutId?: Maybe<Scalars['String']>;
};

export type ExerciseMinAggregate = {
  __typename?: 'ExerciseMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sets?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workoutId?: Maybe<Scalars['String']>;
};

export type ExerciseOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  sets?: Maybe<SortOrder>;
  reps?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  workoutId?: Maybe<SortOrder>;
};

export type ExerciseRecord = {
  __typename?: 'ExerciseRecord';
  id: Scalars['String'];
  reps: Array<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  exerciseId: Scalars['String'];
  perception: Perception;
  exercise: Exercise;
};

export type ExerciseRecordAvgAggregate = {
  __typename?: 'ExerciseRecordAvgAggregate';
  reps?: Maybe<Scalars['Float']>;
};

export type ExerciseRecordCountAggregate = {
  __typename?: 'ExerciseRecordCountAggregate';
  id: Scalars['Int'];
  reps: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  exerciseId: Scalars['Int'];
  perception: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ExerciseRecordCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  perception: Perception;
  reps?: Maybe<ExerciseRecordCreaterepsInput>;
  exercise: ExerciseCreateNestedOneWithoutSetInput;
};

export type ExerciseRecordCreateManyExerciseInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  perception: Perception;
  reps?: Maybe<ExerciseRecordCreateManyrepsInput>;
};

export type ExerciseRecordCreateManyExerciseInputEnvelope = {
  data: Array<ExerciseRecordCreateManyExerciseInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ExerciseRecordCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  exerciseId: Scalars['String'];
  perception: Perception;
  reps?: Maybe<ExerciseRecordCreateManyrepsInput>;
};

export type ExerciseRecordCreateManyrepsInput = {
  set: Array<Scalars['Int']>;
};

export type ExerciseRecordCreateNestedManyWithoutExerciseInput = {
  create?: Maybe<Array<ExerciseRecordCreateWithoutExerciseInput>>;
  connectOrCreate?: Maybe<Array<ExerciseRecordCreateOrConnectWithoutExerciseInput>>;
  createMany?: Maybe<ExerciseRecordCreateManyExerciseInputEnvelope>;
  connect?: Maybe<Array<ExerciseRecordWhereUniqueInput>>;
};

export type ExerciseRecordCreateOrConnectWithoutExerciseInput = {
  where: ExerciseRecordWhereUniqueInput;
  create: ExerciseRecordCreateWithoutExerciseInput;
};

export type ExerciseRecordCreateWithoutExerciseInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  perception: Perception;
  reps?: Maybe<ExerciseRecordCreaterepsInput>;
};

export type ExerciseRecordCreaterepsInput = {
  set: Array<Scalars['Int']>;
};

export type ExerciseRecordGroupBy = {
  __typename?: 'ExerciseRecordGroupBy';
  id: Scalars['String'];
  reps?: Maybe<Array<Scalars['Int']>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  exerciseId: Scalars['String'];
  perception: Perception;
  count?: Maybe<ExerciseRecordCountAggregate>;
  avg?: Maybe<ExerciseRecordAvgAggregate>;
  sum?: Maybe<ExerciseRecordSumAggregate>;
  min?: Maybe<ExerciseRecordMinAggregate>;
  max?: Maybe<ExerciseRecordMaxAggregate>;
};

export type ExerciseRecordListRelationFilter = {
  every?: Maybe<ExerciseRecordWhereInput>;
  some?: Maybe<ExerciseRecordWhereInput>;
  none?: Maybe<ExerciseRecordWhereInput>;
};

export type ExerciseRecordMaxAggregate = {
  __typename?: 'ExerciseRecordMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  exerciseId?: Maybe<Scalars['String']>;
  perception?: Maybe<Perception>;
};

export type ExerciseRecordMinAggregate = {
  __typename?: 'ExerciseRecordMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  exerciseId?: Maybe<Scalars['String']>;
  perception?: Maybe<Perception>;
};

export type ExerciseRecordOrderByInput = {
  id?: Maybe<SortOrder>;
  reps?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  exerciseId?: Maybe<SortOrder>;
  perception?: Maybe<SortOrder>;
};

export enum ExerciseRecordScalarFieldEnum {
  Id = 'id',
  Reps = 'reps',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  ExerciseId = 'exerciseId',
  Perception = 'perception'
}

export type ExerciseRecordScalarWhereInput = {
  AND?: Maybe<Array<ExerciseRecordScalarWhereInput>>;
  OR?: Maybe<Array<ExerciseRecordScalarWhereInput>>;
  NOT?: Maybe<Array<ExerciseRecordScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  reps?: Maybe<IntNullableListFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  exerciseId?: Maybe<StringFilter>;
  perception?: Maybe<EnumPerceptionFilter>;
};

export type ExerciseRecordScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ExerciseRecordScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ExerciseRecordScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ExerciseRecordScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  reps?: Maybe<IntNullableListFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  exerciseId?: Maybe<StringWithAggregatesFilter>;
  perception?: Maybe<EnumPerceptionWithAggregatesFilter>;
};

export type ExerciseRecordSumAggregate = {
  __typename?: 'ExerciseRecordSumAggregate';
  reps?: Maybe<Array<Scalars['Int']>>;
};

export type ExerciseRecordUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  perception?: Maybe<EnumPerceptionFieldUpdateOperationsInput>;
  reps?: Maybe<ExerciseRecordUpdaterepsInput>;
  exercise?: Maybe<ExerciseUpdateOneRequiredWithoutSetInput>;
};

export type ExerciseRecordUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  perception?: Maybe<EnumPerceptionFieldUpdateOperationsInput>;
  reps?: Maybe<ExerciseRecordUpdaterepsInput>;
};

export type ExerciseRecordUpdateManyWithWhereWithoutExerciseInput = {
  where: ExerciseRecordScalarWhereInput;
  data: ExerciseRecordUpdateManyMutationInput;
};

export type ExerciseRecordUpdateManyWithoutExerciseInput = {
  create?: Maybe<Array<ExerciseRecordCreateWithoutExerciseInput>>;
  connectOrCreate?: Maybe<Array<ExerciseRecordCreateOrConnectWithoutExerciseInput>>;
  upsert?: Maybe<Array<ExerciseRecordUpsertWithWhereUniqueWithoutExerciseInput>>;
  createMany?: Maybe<ExerciseRecordCreateManyExerciseInputEnvelope>;
  connect?: Maybe<Array<ExerciseRecordWhereUniqueInput>>;
  set?: Maybe<Array<ExerciseRecordWhereUniqueInput>>;
  disconnect?: Maybe<Array<ExerciseRecordWhereUniqueInput>>;
  delete?: Maybe<Array<ExerciseRecordWhereUniqueInput>>;
  update?: Maybe<Array<ExerciseRecordUpdateWithWhereUniqueWithoutExerciseInput>>;
  updateMany?: Maybe<Array<ExerciseRecordUpdateManyWithWhereWithoutExerciseInput>>;
  deleteMany?: Maybe<Array<ExerciseRecordScalarWhereInput>>;
};

export type ExerciseRecordUpdateWithWhereUniqueWithoutExerciseInput = {
  where: ExerciseRecordWhereUniqueInput;
  data: ExerciseRecordUpdateWithoutExerciseInput;
};

export type ExerciseRecordUpdateWithoutExerciseInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  perception?: Maybe<EnumPerceptionFieldUpdateOperationsInput>;
  reps?: Maybe<ExerciseRecordUpdaterepsInput>;
};

export type ExerciseRecordUpdaterepsInput = {
  set?: Maybe<Array<Scalars['Int']>>;
  push?: Maybe<Scalars['Int']>;
};

export type ExerciseRecordUpsertWithWhereUniqueWithoutExerciseInput = {
  where: ExerciseRecordWhereUniqueInput;
  update: ExerciseRecordUpdateWithoutExerciseInput;
  create: ExerciseRecordCreateWithoutExerciseInput;
};

export type ExerciseRecordWhereInput = {
  AND?: Maybe<Array<ExerciseRecordWhereInput>>;
  OR?: Maybe<Array<ExerciseRecordWhereInput>>;
  NOT?: Maybe<Array<ExerciseRecordWhereInput>>;
  id?: Maybe<StringFilter>;
  reps?: Maybe<IntNullableListFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  exercise?: Maybe<ExerciseRelationFilter>;
  exerciseId?: Maybe<StringFilter>;
  perception?: Maybe<EnumPerceptionFilter>;
};

export type ExerciseRecordWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ExerciseRelationFilter = {
  is?: Maybe<ExerciseWhereInput>;
  isNot?: Maybe<ExerciseWhereInput>;
};

export enum ExerciseScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Sets = 'sets',
  Reps = 'reps',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  WorkoutId = 'workoutId'
}

export type ExerciseScalarWhereInput = {
  AND?: Maybe<Array<ExerciseScalarWhereInput>>;
  OR?: Maybe<Array<ExerciseScalarWhereInput>>;
  NOT?: Maybe<Array<ExerciseScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  sets?: Maybe<IntFilter>;
  reps?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  workoutId?: Maybe<StringFilter>;
};

export type ExerciseScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ExerciseScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ExerciseScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ExerciseScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  sets?: Maybe<IntWithAggregatesFilter>;
  reps?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  workoutId?: Maybe<StringWithAggregatesFilter>;
};

export type ExerciseSumAggregate = {
  __typename?: 'ExerciseSumAggregate';
  sets?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Int']>;
};

export type ExerciseUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  sets?: Maybe<IntFieldUpdateOperationsInput>;
  reps?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  workout?: Maybe<WorkoutUpdateOneRequiredWithoutExerciseInput>;
  Set?: Maybe<ExerciseRecordUpdateManyWithoutExerciseInput>;
};

export type ExerciseUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  sets?: Maybe<IntFieldUpdateOperationsInput>;
  reps?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ExerciseUpdateManyWithWhereWithoutWorkoutInput = {
  where: ExerciseScalarWhereInput;
  data: ExerciseUpdateManyMutationInput;
};

export type ExerciseUpdateManyWithoutWorkoutInput = {
  create?: Maybe<Array<ExerciseCreateWithoutWorkoutInput>>;
  connectOrCreate?: Maybe<Array<ExerciseCreateOrConnectWithoutWorkoutInput>>;
  upsert?: Maybe<Array<ExerciseUpsertWithWhereUniqueWithoutWorkoutInput>>;
  createMany?: Maybe<ExerciseCreateManyWorkoutInputEnvelope>;
  connect?: Maybe<Array<ExerciseWhereUniqueInput>>;
  set?: Maybe<Array<ExerciseWhereUniqueInput>>;
  disconnect?: Maybe<Array<ExerciseWhereUniqueInput>>;
  delete?: Maybe<Array<ExerciseWhereUniqueInput>>;
  update?: Maybe<Array<ExerciseUpdateWithWhereUniqueWithoutWorkoutInput>>;
  updateMany?: Maybe<Array<ExerciseUpdateManyWithWhereWithoutWorkoutInput>>;
  deleteMany?: Maybe<Array<ExerciseScalarWhereInput>>;
};

export type ExerciseUpdateOneRequiredWithoutSetInput = {
  create?: Maybe<ExerciseCreateWithoutSetInput>;
  connectOrCreate?: Maybe<ExerciseCreateOrConnectWithoutSetInput>;
  upsert?: Maybe<ExerciseUpsertWithoutSetInput>;
  connect?: Maybe<ExerciseWhereUniqueInput>;
  update?: Maybe<ExerciseUpdateWithoutSetInput>;
};

export type ExerciseUpdateWithWhereUniqueWithoutWorkoutInput = {
  where: ExerciseWhereUniqueInput;
  data: ExerciseUpdateWithoutWorkoutInput;
};

export type ExerciseUpdateWithoutSetInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  sets?: Maybe<IntFieldUpdateOperationsInput>;
  reps?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  workout?: Maybe<WorkoutUpdateOneRequiredWithoutExerciseInput>;
};

export type ExerciseUpdateWithoutWorkoutInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  sets?: Maybe<IntFieldUpdateOperationsInput>;
  reps?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Set?: Maybe<ExerciseRecordUpdateManyWithoutExerciseInput>;
};

export type ExerciseUpsertWithWhereUniqueWithoutWorkoutInput = {
  where: ExerciseWhereUniqueInput;
  update: ExerciseUpdateWithoutWorkoutInput;
  create: ExerciseCreateWithoutWorkoutInput;
};

export type ExerciseUpsertWithoutSetInput = {
  update: ExerciseUpdateWithoutSetInput;
  create: ExerciseCreateWithoutSetInput;
};

export type ExerciseWhereInput = {
  AND?: Maybe<Array<ExerciseWhereInput>>;
  OR?: Maybe<Array<ExerciseWhereInput>>;
  NOT?: Maybe<Array<ExerciseWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  sets?: Maybe<IntFilter>;
  reps?: Maybe<IntFilter>;
  workout?: Maybe<WorkoutRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  workoutId?: Maybe<StringFilter>;
  Set?: Maybe<ExerciseRecordListRelationFilter>;
};

export type ExerciseWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntNullableListFilter = {
  equals?: Maybe<Array<Scalars['Int']>>;
  has?: Maybe<Scalars['Int']>;
  hasEvery?: Maybe<Array<Scalars['Int']>>;
  hasSome?: Maybe<Array<Scalars['Int']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type IntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  max?: Maybe<NestedIntFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createExercise: Exercise;
  createManyExercise: AffectedRowsOutput;
  deleteExercise?: Maybe<Exercise>;
  updateExercise?: Maybe<Exercise>;
  deleteManyExercise: AffectedRowsOutput;
  updateManyExercise: AffectedRowsOutput;
  upsertExercise: Exercise;
  createExerciseRecord: ExerciseRecord;
  createManyExerciseRecord: AffectedRowsOutput;
  deleteExerciseRecord?: Maybe<ExerciseRecord>;
  updateExerciseRecord?: Maybe<ExerciseRecord>;
  deleteManyExerciseRecord: AffectedRowsOutput;
  updateManyExerciseRecord: AffectedRowsOutput;
  upsertExerciseRecord: ExerciseRecord;
  createWorkout: Workout;
  createManyWorkout: AffectedRowsOutput;
  deleteWorkout?: Maybe<Workout>;
  updateWorkout?: Maybe<Workout>;
  deleteManyWorkout: AffectedRowsOutput;
  updateManyWorkout: AffectedRowsOutput;
  upsertWorkout: Workout;
};


export type MutationCreateExerciseArgs = {
  data: ExerciseCreateInput;
};


export type MutationCreateManyExerciseArgs = {
  data: Array<ExerciseCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteExerciseArgs = {
  where: ExerciseWhereUniqueInput;
};


export type MutationUpdateExerciseArgs = {
  data: ExerciseUpdateInput;
  where: ExerciseWhereUniqueInput;
};


export type MutationDeleteManyExerciseArgs = {
  where?: Maybe<ExerciseWhereInput>;
};


export type MutationUpdateManyExerciseArgs = {
  data: ExerciseUpdateManyMutationInput;
  where?: Maybe<ExerciseWhereInput>;
};


export type MutationUpsertExerciseArgs = {
  where: ExerciseWhereUniqueInput;
  create: ExerciseCreateInput;
  update: ExerciseUpdateInput;
};


export type MutationCreateExerciseRecordArgs = {
  data: ExerciseRecordCreateInput;
};


export type MutationCreateManyExerciseRecordArgs = {
  data: Array<ExerciseRecordCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteExerciseRecordArgs = {
  where: ExerciseRecordWhereUniqueInput;
};


export type MutationUpdateExerciseRecordArgs = {
  data: ExerciseRecordUpdateInput;
  where: ExerciseRecordWhereUniqueInput;
};


export type MutationDeleteManyExerciseRecordArgs = {
  where?: Maybe<ExerciseRecordWhereInput>;
};


export type MutationUpdateManyExerciseRecordArgs = {
  data: ExerciseRecordUpdateManyMutationInput;
  where?: Maybe<ExerciseRecordWhereInput>;
};


export type MutationUpsertExerciseRecordArgs = {
  where: ExerciseRecordWhereUniqueInput;
  create: ExerciseRecordCreateInput;
  update: ExerciseRecordUpdateInput;
};


export type MutationCreateWorkoutArgs = {
  data: WorkoutCreateInput;
};


export type MutationCreateManyWorkoutArgs = {
  data: Array<WorkoutCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteWorkoutArgs = {
  where: WorkoutWhereUniqueInput;
};


export type MutationUpdateWorkoutArgs = {
  data: WorkoutUpdateInput;
  where: WorkoutWhereUniqueInput;
};


export type MutationDeleteManyWorkoutArgs = {
  where?: Maybe<WorkoutWhereInput>;
};


export type MutationUpdateManyWorkoutArgs = {
  data: WorkoutUpdateManyMutationInput;
  where?: Maybe<WorkoutWhereInput>;
};


export type MutationUpsertWorkoutArgs = {
  where: WorkoutWhereUniqueInput;
  create: WorkoutCreateInput;
  update: WorkoutUpdateInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type NestedEnumPerceptionFilter = {
  equals?: Maybe<Perception>;
  in?: Maybe<Array<Perception>>;
  notIn?: Maybe<Array<Perception>>;
  not?: Maybe<NestedEnumPerceptionFilter>;
};

export type NestedEnumPerceptionWithAggregatesFilter = {
  equals?: Maybe<Perception>;
  in?: Maybe<Array<Perception>>;
  notIn?: Maybe<Array<Perception>>;
  not?: Maybe<NestedEnumPerceptionWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumPerceptionFilter>;
  max?: Maybe<NestedEnumPerceptionFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  max?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export enum Perception {
  Good = 'GOOD',
  Medium = 'MEDIUM',
  Bad = 'BAD'
}

export type Query = {
  __typename?: 'Query';
  exercise?: Maybe<Exercise>;
  findFirstExercise?: Maybe<Exercise>;
  exercises: Array<Exercise>;
  aggregateExercise: AggregateExercise;
  groupByExercise: Array<ExerciseGroupBy>;
  exerciseRecord?: Maybe<ExerciseRecord>;
  findFirstExerciseRecord?: Maybe<ExerciseRecord>;
  exerciseRecords: Array<ExerciseRecord>;
  aggregateExerciseRecord: AggregateExerciseRecord;
  groupByExerciseRecord: Array<ExerciseRecordGroupBy>;
  workout?: Maybe<Workout>;
  findFirstWorkout?: Maybe<Workout>;
  workouts: Array<Workout>;
  aggregateWorkout: AggregateWorkout;
  groupByWorkout: Array<WorkoutGroupBy>;
};


export type QueryExerciseArgs = {
  where: ExerciseWhereUniqueInput;
};


export type QueryFindFirstExerciseArgs = {
  where?: Maybe<ExerciseWhereInput>;
  orderBy?: Maybe<Array<ExerciseOrderByInput>>;
  cursor?: Maybe<ExerciseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ExerciseScalarFieldEnum>>;
};


export type QueryExercisesArgs = {
  where?: Maybe<ExerciseWhereInput>;
  orderBy?: Maybe<Array<ExerciseOrderByInput>>;
  cursor?: Maybe<ExerciseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ExerciseScalarFieldEnum>>;
};


export type QueryAggregateExerciseArgs = {
  where?: Maybe<ExerciseWhereInput>;
  orderBy?: Maybe<Array<ExerciseOrderByInput>>;
  cursor?: Maybe<ExerciseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByExerciseArgs = {
  where?: Maybe<ExerciseWhereInput>;
  orderBy?: Maybe<Array<ExerciseOrderByInput>>;
  by: Array<ExerciseScalarFieldEnum>;
  having?: Maybe<ExerciseScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryExerciseRecordArgs = {
  where: ExerciseRecordWhereUniqueInput;
};


export type QueryFindFirstExerciseRecordArgs = {
  where?: Maybe<ExerciseRecordWhereInput>;
  orderBy?: Maybe<Array<ExerciseRecordOrderByInput>>;
  cursor?: Maybe<ExerciseRecordWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ExerciseRecordScalarFieldEnum>>;
};


export type QueryExerciseRecordsArgs = {
  where?: Maybe<ExerciseRecordWhereInput>;
  orderBy?: Maybe<Array<ExerciseRecordOrderByInput>>;
  cursor?: Maybe<ExerciseRecordWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ExerciseRecordScalarFieldEnum>>;
};


export type QueryAggregateExerciseRecordArgs = {
  where?: Maybe<ExerciseRecordWhereInput>;
  orderBy?: Maybe<Array<ExerciseRecordOrderByInput>>;
  cursor?: Maybe<ExerciseRecordWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByExerciseRecordArgs = {
  where?: Maybe<ExerciseRecordWhereInput>;
  orderBy?: Maybe<Array<ExerciseRecordOrderByInput>>;
  by: Array<ExerciseRecordScalarFieldEnum>;
  having?: Maybe<ExerciseRecordScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryWorkoutArgs = {
  where: WorkoutWhereUniqueInput;
};


export type QueryFindFirstWorkoutArgs = {
  where?: Maybe<WorkoutWhereInput>;
  orderBy?: Maybe<Array<WorkoutOrderByInput>>;
  cursor?: Maybe<WorkoutWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<WorkoutScalarFieldEnum>>;
};


export type QueryWorkoutsArgs = {
  where?: Maybe<WorkoutWhereInput>;
  orderBy?: Maybe<Array<WorkoutOrderByInput>>;
  cursor?: Maybe<WorkoutWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<WorkoutScalarFieldEnum>>;
};


export type QueryAggregateWorkoutArgs = {
  where?: Maybe<WorkoutWhereInput>;
  orderBy?: Maybe<Array<WorkoutOrderByInput>>;
  cursor?: Maybe<WorkoutWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByWorkoutArgs = {
  where?: Maybe<WorkoutWhereInput>;
  orderBy?: Maybe<Array<WorkoutOrderByInput>>;
  by: Array<WorkoutScalarFieldEnum>;
  having?: Maybe<WorkoutScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type Workout = {
  __typename?: 'Workout';
  id: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  Exercise: Array<Exercise>;
};


export type WorkoutExerciseArgs = {
  where?: Maybe<ExerciseWhereInput>;
  orderBy?: Maybe<Array<ExerciseOrderByInput>>;
  cursor?: Maybe<ExerciseWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ExerciseScalarFieldEnum>>;
};

export type WorkoutCountAggregate = {
  __typename?: 'WorkoutCountAggregate';
  id: Scalars['Int'];
  name: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  _all: Scalars['Int'];
};

export type WorkoutCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Exercise?: Maybe<ExerciseCreateNestedManyWithoutWorkoutInput>;
};

export type WorkoutCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WorkoutCreateNestedOneWithoutExerciseInput = {
  create?: Maybe<WorkoutCreateWithoutExerciseInput>;
  connectOrCreate?: Maybe<WorkoutCreateOrConnectWithoutExerciseInput>;
  connect?: Maybe<WorkoutWhereUniqueInput>;
};

export type WorkoutCreateOrConnectWithoutExerciseInput = {
  where: WorkoutWhereUniqueInput;
  create: WorkoutCreateWithoutExerciseInput;
};

export type WorkoutCreateWithoutExerciseInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WorkoutGroupBy = {
  __typename?: 'WorkoutGroupBy';
  id: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  count?: Maybe<WorkoutCountAggregate>;
  min?: Maybe<WorkoutMinAggregate>;
  max?: Maybe<WorkoutMaxAggregate>;
};

export type WorkoutMaxAggregate = {
  __typename?: 'WorkoutMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WorkoutMinAggregate = {
  __typename?: 'WorkoutMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WorkoutOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type WorkoutRelationFilter = {
  is?: Maybe<WorkoutWhereInput>;
  isNot?: Maybe<WorkoutWhereInput>;
};

export enum WorkoutScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type WorkoutScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<WorkoutScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<WorkoutScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<WorkoutScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type WorkoutUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Exercise?: Maybe<ExerciseUpdateManyWithoutWorkoutInput>;
};

export type WorkoutUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type WorkoutUpdateOneRequiredWithoutExerciseInput = {
  create?: Maybe<WorkoutCreateWithoutExerciseInput>;
  connectOrCreate?: Maybe<WorkoutCreateOrConnectWithoutExerciseInput>;
  upsert?: Maybe<WorkoutUpsertWithoutExerciseInput>;
  connect?: Maybe<WorkoutWhereUniqueInput>;
  update?: Maybe<WorkoutUpdateWithoutExerciseInput>;
};

export type WorkoutUpdateWithoutExerciseInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type WorkoutUpsertWithoutExerciseInput = {
  update: WorkoutUpdateWithoutExerciseInput;
  create: WorkoutCreateWithoutExerciseInput;
};

export type WorkoutWhereInput = {
  AND?: Maybe<Array<WorkoutWhereInput>>;
  OR?: Maybe<Array<WorkoutWhereInput>>;
  NOT?: Maybe<Array<WorkoutWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  Exercise?: Maybe<ExerciseListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type WorkoutWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CreateExerciseMutationVariables = Exact<{
  data: ExerciseCreateInput;
}>;


export type CreateExerciseMutation = (
  { __typename?: 'Mutation' }
  & { createExercise: (
    { __typename?: 'Exercise' }
    & Pick<Exercise, 'id' | 'name'>
  ) }
);

export type CreateExerciseRecordMutationVariables = Exact<{
  data: ExerciseRecordCreateInput;
}>;


export type CreateExerciseRecordMutation = (
  { __typename?: 'Mutation' }
  & { createExerciseRecord: (
    { __typename?: 'ExerciseRecord' }
    & Pick<ExerciseRecord, 'id'>
  ) }
);

export type CreateWorkoutMutationVariables = Exact<{
  data: WorkoutCreateInput;
}>;


export type CreateWorkoutMutation = (
  { __typename?: 'Mutation' }
  & { createWorkout: (
    { __typename: 'Workout' }
    & Pick<Workout, 'id' | 'name'>
  ) }
);

export type DeleteExerciseMutationVariables = Exact<{
  where: ExerciseWhereUniqueInput;
}>;


export type DeleteExerciseMutation = (
  { __typename?: 'Mutation' }
  & { deleteExercise?: Maybe<(
    { __typename?: 'Exercise' }
    & Pick<Exercise, 'id'>
  )> }
);

export type DeleteWorkoutMutationVariables = Exact<{
  data: WorkoutWhereUniqueInput;
}>;


export type DeleteWorkoutMutation = (
  { __typename?: 'Mutation' }
  & { deleteWorkout?: Maybe<(
    { __typename?: 'Workout' }
    & Pick<Workout, 'id'>
  )> }
);

export type GetAllWorkoutsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWorkoutsQuery = (
  { __typename?: 'Query' }
  & { workouts: Array<(
    { __typename?: 'Workout' }
    & Pick<Workout, 'id' | 'name' | 'createdAt'>
  )> }
);

export type GetExerciseByIdQueryVariables = Exact<{
  where: ExerciseWhereUniqueInput;
}>;


export type GetExerciseByIdQuery = (
  { __typename?: 'Query' }
  & { exercise?: Maybe<(
    { __typename?: 'Exercise' }
    & Pick<Exercise, 'name'>
  )> }
);

export type GetWorkoutByIdQueryVariables = Exact<{
  data: WorkoutWhereUniqueInput;
}>;


export type GetWorkoutByIdQuery = (
  { __typename?: 'Query' }
  & { workout?: Maybe<(
    { __typename?: 'Workout' }
    & Pick<Workout, 'id' | 'name' | 'createdAt'>
    & { Exercise: Array<(
      { __typename?: 'Exercise' }
      & Pick<Exercise, 'id' | 'name' | 'reps' | 'sets'>
    )> }
  )> }
);

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "AffectedRowsOutput",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AggregateExercise",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseCountAggregate"
            },
            "args": []
          },
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseAvgAggregate"
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseSumAggregate"
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseMinAggregate"
            },
            "args": []
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseMaxAggregate"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AggregateExerciseRecord",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordCountAggregate"
            },
            "args": []
          },
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordAvgAggregate"
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordSumAggregate"
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordMinAggregate"
            },
            "args": []
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordMaxAggregate"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AggregateWorkout",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "OBJECT",
              "name": "WorkoutCountAggregate"
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "WorkoutMinAggregate"
            },
            "args": []
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "WorkoutMaxAggregate"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Exercise",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "workoutId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "workout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Workout"
              }
            },
            "args": []
          },
          {
            "name": "Set",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ExerciseRecord"
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseAvgAggregate",
        "fields": [
          {
            "name": "sets",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseCountAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "workoutId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_all",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseGroupBy",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "workoutId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseCountAggregate"
            },
            "args": []
          },
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseAvgAggregate"
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseSumAggregate"
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseMinAggregate"
            },
            "args": []
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseMaxAggregate"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseMaxAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sets",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "workoutId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseMinAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sets",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "workoutId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseRecord",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "exerciseId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "perception",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "exercise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Exercise"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseRecordAvgAggregate",
        "fields": [
          {
            "name": "reps",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseRecordCountAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "exerciseId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "perception",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_all",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseRecordGroupBy",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "exerciseId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "perception",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordCountAggregate"
            },
            "args": []
          },
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordAvgAggregate"
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordSumAggregate"
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordMinAggregate"
            },
            "args": []
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecordMaxAggregate"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseRecordMaxAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "exerciseId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "perception",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseRecordMinAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "exerciseId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "perception",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseRecordSumAggregate",
        "fields": [
          {
            "name": "reps",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ExerciseSumAggregate",
        "fields": [
          {
            "name": "sets",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reps",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createExercise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Exercise"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createManyExercise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "skipDuplicates",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteExercise",
            "type": {
              "kind": "OBJECT",
              "name": "Exercise"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateExercise",
            "type": {
              "kind": "OBJECT",
              "name": "Exercise"
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyExercise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput"
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyExercise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertExercise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Exercise"
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createExerciseRecord",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ExerciseRecord"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createManyExerciseRecord",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "skipDuplicates",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteExerciseRecord",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecord"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateExerciseRecord",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecord"
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyExerciseRecord",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput"
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyExerciseRecord",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertExerciseRecord",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ExerciseRecord"
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createWorkout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Workout"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createManyWorkout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "skipDuplicates",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteWorkout",
            "type": {
              "kind": "OBJECT",
              "name": "Workout"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateWorkout",
            "type": {
              "kind": "OBJECT",
              "name": "Workout"
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyWorkout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput"
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyWorkout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertWorkout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Workout"
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "exercise",
            "type": {
              "kind": "OBJECT",
              "name": "Exercise"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "findFirstExercise",
            "type": {
              "kind": "OBJECT",
              "name": "Exercise"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "exercises",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Exercise"
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "aggregateExercise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregateExercise"
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "groupByExercise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ExerciseGroupBy"
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "by",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "having",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "exerciseRecord",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecord"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "findFirstExerciseRecord",
            "type": {
              "kind": "OBJECT",
              "name": "ExerciseRecord"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "exerciseRecords",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ExerciseRecord"
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "aggregateExerciseRecord",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregateExerciseRecord"
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "groupByExerciseRecord",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ExerciseRecordGroupBy"
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "by",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "having",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "workout",
            "type": {
              "kind": "OBJECT",
              "name": "Workout"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "findFirstWorkout",
            "type": {
              "kind": "OBJECT",
              "name": "Workout"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "workouts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Workout"
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "aggregateWorkout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregateWorkout"
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "groupByWorkout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "WorkoutGroupBy"
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "by",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "having",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Workout",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "Exercise",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Exercise"
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WorkoutCountAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_all",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WorkoutGroupBy",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "OBJECT",
              "name": "WorkoutCountAggregate"
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "WorkoutMinAggregate"
            },
            "args": []
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "WorkoutMaxAggregate"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WorkoutMaxAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WorkoutMinAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;

export const CreateExerciseDocument = gql`
    mutation createExercise($data: ExerciseCreateInput!) {
  createExercise(data: $data) {
    id
    name
  }
}
    `;

export function useCreateExerciseMutation() {
  return Urql.useMutation<CreateExerciseMutation, CreateExerciseMutationVariables>(CreateExerciseDocument);
};
export const CreateExerciseRecordDocument = gql`
    mutation createExerciseRecord($data: ExerciseRecordCreateInput!) {
  createExerciseRecord(data: $data) {
    id
  }
}
    `;

export function useCreateExerciseRecordMutation() {
  return Urql.useMutation<CreateExerciseRecordMutation, CreateExerciseRecordMutationVariables>(CreateExerciseRecordDocument);
};
export const CreateWorkoutDocument = gql`
    mutation createWorkout($data: WorkoutCreateInput!) {
  createWorkout(data: $data) {
    id
    name
    __typename
  }
}
    `;

export function useCreateWorkoutMutation() {
  return Urql.useMutation<CreateWorkoutMutation, CreateWorkoutMutationVariables>(CreateWorkoutDocument);
};
export const DeleteExerciseDocument = gql`
    mutation deleteExercise($where: ExerciseWhereUniqueInput!) {
  deleteExercise(where: $where) {
    id
  }
}
    `;

export function useDeleteExerciseMutation() {
  return Urql.useMutation<DeleteExerciseMutation, DeleteExerciseMutationVariables>(DeleteExerciseDocument);
};
export const DeleteWorkoutDocument = gql`
    mutation deleteWorkout($data: WorkoutWhereUniqueInput!) {
  deleteWorkout(where: $data) {
    id
  }
}
    `;

export function useDeleteWorkoutMutation() {
  return Urql.useMutation<DeleteWorkoutMutation, DeleteWorkoutMutationVariables>(DeleteWorkoutDocument);
};
export const GetAllWorkoutsDocument = gql`
    query getAllWorkouts {
  workouts {
    id
    name
    createdAt
  }
}
    `;

export function useGetAllWorkoutsQuery(options: Omit<Urql.UseQueryArgs<GetAllWorkoutsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllWorkoutsQuery>({ query: GetAllWorkoutsDocument, ...options });
};
export const GetExerciseByIdDocument = gql`
    query getExerciseById($where: ExerciseWhereUniqueInput!) {
  exercise(where: $where) {
    name
  }
}
    `;

export function useGetExerciseByIdQuery(options: Omit<Urql.UseQueryArgs<GetExerciseByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetExerciseByIdQuery>({ query: GetExerciseByIdDocument, ...options });
};
export const GetWorkoutByIdDocument = gql`
    query getWorkoutById($data: WorkoutWhereUniqueInput!) {
  workout(where: $data) {
    id
    name
    createdAt
    Exercise {
      id
      name
      reps
      sets
    }
  }
}
    `;

export function useGetWorkoutByIdQuery(options: Omit<Urql.UseQueryArgs<GetWorkoutByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetWorkoutByIdQuery>({ query: GetWorkoutByIdDocument, ...options });
};