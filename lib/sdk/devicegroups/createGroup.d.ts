type Params = {
    apiKey: string;
    portal: string;
    groupname: string;
    description: string;
    devices?: number[];
};
/**
 * Creates a new device group
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    groupname - The name of the group to create
 *
 *    description - Description for the group
 *
 *    devices - OPTIONAL Array of enrolled device ID's to add to group
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
